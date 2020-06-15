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
        status: 200,
        data: {},
      };
    } else {
      const password = await this.getMd5Data(params.password);
      if (password === corrct.password) {
        console.log(corrct);
        const v = JSON.parse(corrct);
        console.log(v.name);
        result = {
          message: '登录成功',
          status: 200,
          data: {
            roles: corrct.roles,
            token: corrct.token,
            introduction: corrct.introduction,
            avatar: corrct.avatar,
            name: corrct.name,
          },
        };
        console.log(result);
        // return corrct.token;
      } else {
        result = {
          message: '密码错误',
          status: 200,
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
        status: 200,
        data: {
          token,
        },
      };
    } else {
      result = {
        message: '已存在用户',
        status: 200,
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
        status: 200,
        data: {},
      };
    } else {
      result = {
        message: '成功',
        status: 200,
        data: {
          username: corrct.username,
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
