const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SinhVien = new Schema({
  hoTen: { type: String, require: true},
  truong: { type: String, require: true},
  phongID: {
    type: Schema.Types.ObjectId,
    ref: "Phong",
  },
  lop: { type: String, require: true},
  ngaySinh: { type: Date, require: true},
  diaChi: { type: String, require: true},
  gioiTinh: { type: String, require: true},
  sdt: { type: String, require: true},
  cmnd: { type: String, require: true},
  email: { type: String, require: true},
});

module.exports = mongoose.model('SinhVien ',SinhVien);