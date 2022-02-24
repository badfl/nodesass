'use strict'

const Service = require('egg').Service;

class UserRoleService extends Service {
  async add(params) {
    const { ctx } = this;
    params.createTime = Date.now();
    let p = ctx.model.UserRole(params);
    var result = await ctx.model.UserRole.create(p)
    return result;
  }
  async get() {
    const { ctx } = this;
    let result;
    let r = await ctx.model.UserRole.find().then(function(res){
      result = res;
    })
    return result;
  }
  async addPremissions(params) {

  }
  async update() {

  }
  async delete() {

  }
}

module.exports = UserRoleService;
