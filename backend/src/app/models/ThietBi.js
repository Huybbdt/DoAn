const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThietBi = new Schema({
    phongID: {
      type: Schema.Types.ObjectId,
      ref: "Phong",
    },
    tenThietBi: { type: String, require: true},
    soLuong: { type: Number, require: true},
    tinhTrang: { type: String, require: true},
    moTa: { type: String},
  
   
  });

module.exports = mongoose.model('ThietBi',ThietBi);