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
    required: false,
  },
};

class UserController extends Controller {

/* eslint-disable */
  /**
   *
   * @api {POST} /api/user/login 用户登录
   * @apiName 用户
   * @apiGroup User
   * @apiVersion  1.0.0
   *
   *
   * @apiParam  {String} username 用户名
   * @apiParam  {String} password 密码
   *
   * @apiSuccess (200) {String} message 消息
   * @apiSuccess (200) {number} code 状态码
   * @apiSuccess (200) {object} data 数据
   * @apiSuccess (200) {Array} data.roles 权限
   * @apiSuccess (200) {String} data.token token
   * @apiSuccess (200) {String} data.introduction 描述
   * @apiSuccess (200) {String} data.avatar 头像
   * @apiSuccess (200) {String} data.name 姓名
   *
   * @apiParamExample  {json} Request-Example:
   * {
   *     username : admin,
   *     password : 111111
   * }
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *  "message": "登录成功",
   *  "code": 200,
   *  "data": {
   *    "roles": ["admin"],
   *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTkyMjAzNzkyfQ.jF_Fn3bhxrpSjtYYQPmbkCyXlTadKSaW-F0U1KkhnJk",
   *     "introduction": "I am a super administrator",
   *     "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
   *     "name": "Super Admin"
   *   }
   * }
   *
   *
   */
  /* eslint-enable */
  async login() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const result = await ctx.service.user.login(ctx.request.body);
    ctx.body = result;
  }

/* eslint-disable */
  /**
   *
   * @api {POST} /api/user/registered 用户注册
   * @apiName 用户
   * @apiGroup User
   * @apiVersion  1.0.0
   *
   *
   * @apiParam  {String} username 用户名
   * @apiParam  {String} password 密码
   *
   * @apiSuccess (200) {String} message 消息
   * @apiSuccess (200) {number} code 状态码
   * @apiSuccess (200) {object} data 数据
   * @apiSuccess (200) {String} data.token token
   *
   * @apiParamExample  {json} Request-Example:
   * {
   *     username : admin,
   *     password : 111111
   * }
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *  "message": "注册成功",
   *  "code": 200,
   *  "data": {
   *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTkyMjAzNzkyfQ.jF_Fn3bhxrpSjtYYQPmbkCyXlTadKSaW-F0U1KkhnJk",
   *   }
   * }
   *
   *
   */
  /* eslint-enable */
  async registered() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const result = await ctx.service.user.registered(ctx.request.body);
    ctx.body = result;
  }

/* eslint-disable */
  /**
   *
   * @api {GET} /api/user/info 获取用户信息
   * @apiName 用户
   * @apiGroup User
   * @apiVersion  1.0.0
   *
   *
   * @apiParam  {String} token token
   *
   * @apiSuccess (200) {String} message 消息
   * @apiSuccess (200) {number} code 状态码
   * @apiSuccess (200) {object} data 数据
   * @apiSuccess (200) {Array} data.roles 权限
   * @apiSuccess (200) {String} data.token token
   * @apiSuccess (200) {String} data.introduction 描述
   * @apiSuccess (200) {String} data.avatar 头像
   * @apiSuccess (200) {String} data.name 姓名
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *  "message": "成功",
   *  "code": 200,
   *  "result": {
   *     "username": "admin",
   *     "roles": ["admin"],
   *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTkyMjAzNzkyfQ.jF_Fn3bhxrpSjtYYQPmbkCyXlTadKSaW-F0U1KkhnJk",
   *     "introduction": "I am a super administrator",
   *     "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
   *     "name": "Super Admin"
   *   }
   * }
   *
   *
   */
  /* eslint-enable */
  async getUserInfo() {
    const ctx = this.ctx;
    ctx.validate(infoRule, ctx.request.query);
    const result = await ctx.service.user.getUserInfo(ctx.request.query);
    ctx.body = result;
  }

  async logout() { // 注销
    const ctx = this.ctx;
    ctx.validate(infoRule, ctx.request.body);
    ctx.body = {
      message: '注销成功',
      status: 200,
      result: {},
    };
  }
}

module.exports = UserController;
