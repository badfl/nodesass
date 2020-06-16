'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  async login(params) { // 登录
    const ctx = this.ctx;
    const corrct = await ctx.model.User.findOne({ username: params.username });


    let result;
    if (!corrct) {
      result = {
        message: '无此用户',
        code: 200,
        data: {},
      };
    } else {
      const password = await this.getMd5Data(params.password);
      if (password === corrct.password) {
        let v;
        try {
          v = JSON.parse(JSON.stringify(corrct));
        } catch (error) {
          v = corrct;
        }
        result = {
          message: '登录成功',
          code: 200,
          data: {
            roles: v.roles,
            token: v.token,
            introduction: v.introduction,
            avatar: v.avatar,
            name: v.name,
          },
        };
        // console.log(result);
      } else {
        result = {
          message: '密码错误',
          code: 200,
          data: {
          },
        };
      }
    }
    return result;
  }

  async registered(params) { // 注册
    const ctx = this.ctx;
    const app = this.app;
    let result;
    const corrct = await ctx.model.User.findOne({ username: { $eq: params.username } });
    if (!corrct) {
      const token = app.jwt.sign({
        username: params.username,
      }, app.config.jwt.secret);
      const p = params;
      const password = await this.getMd5Data(params.password);
      p.token = token;
      p.password = password;
      await ctx.model.User.insertMany([ p ]);
      result = {
        message: '注册成功',
        code: 200,
        data: {
          token,
        },
      };
    } else {
      result = {
        message: '已存在用户',
        code: 200,
        data: {},
      };
    }
    return result;
  }

  async getUserInfo(params) { // 获取用户信息
    const ctx = this.ctx;
    const corrct = await ctx.model.User.findOne({ token: { $eq: params.token } });
    let result;

    if (!corrct) {
      result = {
        message: '无此用户',
        code: 200,
        data: {},
      };
    } else {
      let v;
      try {
        v = JSON.parse(JSON.stringify(corrct));
      } catch (error) {
        v = corrct;
      }
      result = {
        message: '成功',
        code: 200,
        data: {
          username: v.username,
          roles: v.roles,
          token: v.token,
          introduction: v.introduction,
          avatar: v.avatar,
          name: v.name,
        },
      };
    }
    return result;
  }

  async getMd5Data(data) { // MD5密码加密
    return crypto.createHash('md5').update(data).digest('hex');
  }
}

module.exports = UserService;
