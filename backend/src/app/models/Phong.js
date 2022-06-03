const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Phong = new Schema({
  NhanVienID: {
    type: Schema.Types.ObjectId,
    ref: "NhanVien",
  },
  KhuID: {
    type: Schema.Types.ObjectId,
    ref: "NhanVien",
  },
  TenPhong: { type: String, require: true},
  SoLuongChua: { type: Number, require: true, default: 8},
  SoLuongDangO: { type: Number, require: true,default: 0},
  TinhTrang: { type: String,default: 'Trống'},
});

module.exports = mongoose.model('Phong',Phong);