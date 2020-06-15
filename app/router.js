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
  router.post('/vue-element-admin/user/login', controller.user.login);
  router.post('/vue-element-admin/user/registered', controller.user.registered);
  router.get('/vue-element-admin/user/info', controller.user.getUserInfo);
  router.post('/vue-element-admin/user/logout', controller.user.logout);

};
