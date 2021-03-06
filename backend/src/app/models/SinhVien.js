const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SinhVien = new Schema({
  PhongID: {
    type: Schema.Types.ObjectId,
    ref: "Phong",
  },
  HoTen: { type: String, require: true},
  GioiTinh: { type: Boolean,default: false },
  NgaySinh: { type: Date, require: true},
  SDT: { type: String, require: true},
  CMND: { type: String, require: true},
  NoiCap: { type: String, require: true},
  DanToc: { type: String, require: true},
  TonGiao: { type: String, require: true},
  MaSV: { type: String, require: true},
  Lop: { type: String, require: true},
  Khoa: { type: String, require: true},
  Truong: { type: String, require: true},
  DiaChi: { type: String, require: true},
  HoTenNguoiThan: { type: String, require: true},
  SDTNguoiThan: { type: String, require: true},
  DiaChiNguoiThan: { type: String, require: true},
  TrangThai: { type: String, default: "Đang Chờ Duyệt"},
});

module.exports = mongoose.model('SinhVien ',SinhVien);