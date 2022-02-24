'use strict'
// 菜单
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const NavListSchema = new Schema({
    name: { type: String},
    parentId: {type : Number},
    id: {type: Number},
    meta: {
      icon: {type: String},
      title: {type: String},
      show:{type: Boolean},
      target:{type: String}
    },
    component: {type: String},
    redirect: {type: String},
    path: {type: String},
    publishedDate: {type: Date, default: Date.now},
    createDate:{type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
    state:{type:String, options: 'draft, published, archived', default: 'published'}
  })
  return mongoose.model('navlist', NavListSchema, 'navlist');
}