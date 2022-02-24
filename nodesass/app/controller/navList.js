'use strict';

const Controller = require('egg').Controller;
const addRule = {
  name: { type: 'string', required:true},
  parentId: {type : 'number', required:false},
  id: {type: 'number', required:false},
  meta: {
    type: 'object',
    required:true,
    rule: {
      icon: {type: 'string', required:false},
      title: {type: 'string', required:true},
      show:{type: 'boolean', required:false, default: true},
      target:{type: 'string', required:false}
    }
  },
  component: {type: 'string', required:true},
  redirect: {type: 'string', required:false},
  path: {type: 'string', required:false}
}
class NavListController extends Controller {

  async add() {
    const { ctx } = this;

    ctx.validate(addRule, ctx.request.body);
    const result = await ctx.service.navList.add(ctx.request.body);
    // console.log('con::',result)
    ctx.body = {
      message:'添加成功',
      code:200,
      success: true,
      result:{}
    };
  }
  async update() {

  }
  async delete() {

  }
  async get() {
    const { ctx } = this;
    const result = await ctx.service.navList.get();
    ctx.body = {
      message: '成功',
      code:200,
      success: true,
      result:result
    }
  }

}

module.exports = NavListController;
