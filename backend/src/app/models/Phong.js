const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Phong = new Schema({
    tenPhong: { type: String, require: true},
    nhanVienID: {
      type: Schema.Types.ObjectId,
      ref: "NhanVien",
    },
 
    khu: { type: String , require: true},
    soLuongChua: { type: Number, require: true, default: 8},
    soLuongDangO: { type: Number, require: true,default: 0},
    tinhTrang: { type: String},
  });

module.exports = mongoose.model('Phong',Phong);