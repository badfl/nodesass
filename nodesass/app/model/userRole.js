'use strict';
// 角色权限
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = mongoose.ObjectId;
  const UserRole = new Schema({
    id: {type: String},
    name: {type: String, require: true}, // 权限名称
    describe: {type: String}, // 描述
    createTime: {type: Date}, // 创建时间
    updateTime: {type: Date}, // 修改时间
    creatorId: {type: String}, // 创建者id
    permissions: {type: Array}, // 权限
  })
}