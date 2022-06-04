const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Phong = new Schema({
  KhuID: {
    type: Schema.Types.ObjectId,
    ref: "Khu",
  },
  TenPhong: { type: String, require: true},
  SoLuongChua: { type: Number, require: true, default: 8},
  SoLuongDangO: { type: Number, require: true,default: 0},
  TinhTrang: { type: String,default: 'Trống'},
});

module.exports = mongoose.model('Phong',Phong);