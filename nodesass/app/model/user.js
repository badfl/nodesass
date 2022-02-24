'use strict';
const ObjectId = mongoose.ObjectId;

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    token: { type: String },
    avatar: { type: String },
    email: { type: String },
    status: { type: Number }, // 管理级别
    userRole: { type: ObjectId },
    publishedDate: {type: Date, default: Date.now},
    createDate:{type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
  });
  return mongoose.model('user', UserSchema, 'user');
};
