'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  // router.get('/news', controller.home.news);
  router.get('/news/:id', controller.home.news);

  // 用户
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/registered', controller.user.registered);
  router.get('/api/user/info', jwt, controller.user.getUserInfo);
  router.post('/api/user/logout', controller.user.logout);

  // 帖子
  router.post('/api/post/addpost', controller.posts.addPost);

  // 菜单
  router.post('/api/nav/add', controller.navList.add);
  router.get('/api/nav/get', controller.navList.get);

  // 权限
  router.post('/api/userrole/add', controller.userRole.add);
  router.get('/api/userrole/get', controller.userRole.get);
};