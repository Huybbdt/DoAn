const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NhanVien = new Schema({
  HoTen: { type: String, require: true},
  GioiTinh:  { type: Boolean, require: true,default: false },
  NgaySinh: { type: Date, require: true},
  SDT: { type: String, require: true},
  CMND: { type: String, require: true},
  NoiCap: { type: String, require: true},
  DanToc: { type: String, require: true},
  TonGiao: { type: String, require: true},
  DiaChi: { type: String, require: true},
  ChucVu: { type: String, require: true, default: "nhân viên"},
});

module.exports = mongoose.model('NhanVien',NhanVien);