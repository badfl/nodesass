'use strict';

const Controller = require('egg').Controller;
const addRule = {
  name: { type:'string', required: true},
  describe: {type:'string', required: false}
}
class UserRoleController extends Controller {
  async add() {
    const { ctx } = this;
    ctx.validate(addRule, ctx.request.body);
    const result = await ctx.service.userRole.add(ctx.request.body);
    ctx.body = {
      message: '添加成功',
      code:200,
      success:true,
      result: result
    }
  }
  async get() {
    const { ctx } = this;
    const result = await ctx.service.userRole.get();
    ctx.body = {
      message:'成功',
      code:200,
      success:true,
      result:result
    }
  }
  async addpermission() {
    
  }
}

module.exports = UserRoleController;
