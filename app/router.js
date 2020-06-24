'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/news', controller.home.news);
  router.get('/news/:id', controller.home.news);

  // 用户
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/registered', controller.user.registered);
  router.get('/api/user/info', controller.user.getUserInfo);
  router.post('/pai/user/logout', controller.user.logout);

  // 帖子
  router.post('/api/post/addpost', controller.posts.addPost);
};
