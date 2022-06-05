const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThietBi = new Schema({
    phongID: {
      type: Schema.Types.ObjectId,
      ref: "Phong",
    },
    TenTB: { type: String, require: true},
    SoLuong: { type: Number, require: true,default: 1},
    TinhTrang: { type: String, require: true,default: "Còn sử Dụng Được"},
    MoTa: { type: String},
  
   
  });

module.exports = mongoose.model('ThietBi',ThietBi);