'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = mongoose.ObjectId;
  const PostsSchema = new Schema({
    title: { type: String, label: '标题' },
    author: {
      $ref: String,
      $id: ObjectId,
    },
    wechat: { type: Boolean, label: '是否微信消息回复' },
    state: { type: String, options: 'draft, published, archived', label: '发布状态' },
    publishedDate: { type: Date, label: '发布时间' },
    meta: {
      zhname: { type: String, label: '中文名称' },
      oldname: { type: String, label: '原名' },
      alternate: { type: Array, label: '又名' },
      douban: { type: String, label: '豆瓣链接' },
      language: { type: String, label: '语言' },
      country: { type: String, label: '制片国家/地区' },
      stars: { type: Array, label: '主演' },
      director: { type: Array, label: '导演' },
      writers: { type: Array, label: '编剧' },
      types: { type: String, label: '类型' },
      years: { type: String, label: '年份' },
      times: { type: Array, lable: '上映时间' },
      tlength: { type: Array, label: '时长' },
      imdb: { type: String, label: 'IMDB链接' },
    },
    content: {
      brief: { type: String, label: '简介' },
      extended: { type: String, label: '详情' },
    },
    download: {
      bt: { type: Array, label: '磁力链接' },
      ftp: { type: Array, label: 'ftp链接' },
      baidu: { type: Array, label: '百度云链接' },
      uc: { type: Array, label: 'UC云盘链接' },
      ed2k: { type: Array, label: '电驴链接' },
      ctyun: { type: Array, label: '天翼云链接' },
      five: { type: Array, label: '115链接' },
      others: { type: Array, label: '其他' },
    },
  });
  return mongoose.model('posts', PostsSchema, 'posts');
};
