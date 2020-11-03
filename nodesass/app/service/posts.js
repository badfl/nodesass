'use strict';

const Service = require('egg').Service;

class PostsService extends Service {
  echo() {

  }
  getPost() {

  }

  addPost(params) {
    const ctx = this.ctx;
    const newData = {};
    let result;
    newData.meta = params.meta || {};
    const Post = ctx.model.Posts({
      meta: params.meta,
      content: params.content,
      download: params.download,
      author: {
        $ref: 'user',
        $id: params.id,
      },
      title: params.title,
      wechat: params.wechat || true,
      state: params.state || 'draft',
      publishedDate: Date.now(),
    });

    // await ctx.model.Posts.create(Post, function(err) {
    //   if (err) {
    //     console.log(err);
    //     result = {
    //       message: err,
    //       code: 200,
    //     };
    //   }
    //   result = {
    //     message: '添加成功',
    //     code: 200,
    //   };
    //   console.log('添加成功')        
    // });

    // console.log('请求成功')
    console.log('请求成功', result);
    return result;
  }

  updatePost() {

  }

  deletePost() {

  }

}

module.exports = PostsService;
