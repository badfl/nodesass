'use strict';

const Controller = require('egg').Controller;

// 定义定义请求参数规则
const createRule = {
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
};

const infoRule = {
  token: {
    type: 'string',
    required: true,
  },
};

class UserController extends Controller {
  async login() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const result = await ctx.service.user.login(ctx.request.body);
    ctx.body = result;
  }

  async registered() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const result = await ctx.service.user.registered(ctx.request.body);
    ctx.body = result;
  }

  async getUserInfo() {
    const ctx = this.ctx;
    ctx.validate(infoRule, ctx.request.body);
    const result = await ctx.service.user.getUserInfo(ctx.request.body);
    ctx.body = result;
  }

  async logout() { // 注销
    const ctx = this.ctx;
    ctx.validate(infoRule, ctx.request.body);    
    ctx.body = {
      message: '注销成功',
      status: 200,
      data:{},
    };
  }
}

module.exports = UserController;
