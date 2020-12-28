'use strict';

const Service = require('egg').Service;

class NavListService extends Service {
  async add(params) {
    const { ctx, app} = this;
    let nav = ctx.model.NavList(params)
    let s = await ctx.model.NavList.create(nav);
    return s;
  }
  async get(params) {
    const {ctx} = this;
    let result;
    // 过后分页
    // var p ={
    //   page: 1,
    //   perPage: 10,
    //   maxPages:10,
    //   sort:'publishedDate',    
    // }
    // var d ={
    //   total:100,
    //   results:[],
    //   currentPage:1,
    //   totalPages:100,
    //   pages:[],
    //   previous:false,
    //   next:false,
    //   first:1,
    //   last:1
    // }
    var r = await ctx.model.NavList.find().then(function(res){
      // console.log(res)
      result = res;
    })
    // console.log(result)
    return result;
  }
}

module.exports = NavListService;
