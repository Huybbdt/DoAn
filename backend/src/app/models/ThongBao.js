const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThongBao = new Schema({
    NhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    TieuDe: { type: String, require: true},
    NoiDung: { type: String},
    Anh: { type: String},
    NgayLap : { type:Date,default: new Date()}
   
  });

module.exports = mongoose.model('ThongBao',ThongBao);