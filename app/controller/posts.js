'use strict';

const Controller = require('egg').Controller;
const addPostRule = {

}

class PostsController extends Controller {
  async echo() {
    console.log('echo');
  }

  getPost() {
    const ctx = this.ctx;

  }

  addPost() {
    const ctx = this.ctx;
    let data;
    try {
      data = JSON.parse(data);
    } catch (error) {
      data = ctx.request.body;
    }
    ctx.validate(addPostRule, data);
    const result = ctx.service.posts.addPost(data);
    ctx.body = result;
  }

  updatePost() {
    const ctx = this.ctx;
  }

  deletePost() {
    const ctx = this.ctx;
  }
}

module.exports = PostsController;
