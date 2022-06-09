const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThietBi = new Schema({
    PhongID: {
      type: Schema.Types.ObjectId,
      ref: "Phong",
    },
    TenThietBi: { type: String, require: true},
    SoLuong: { type: Number,default: 1},
    MoTa: { type: String},
  
   
  });

module.exports = mongoose.model('ThietBi',ThietBi);