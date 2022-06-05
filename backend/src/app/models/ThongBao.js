const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThongBao = new Schema({
    nhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    TieuDe: { type: String, require: true},
    NoiDung: { type: String},
    Anh: { type: String},
   
  });

module.exports = mongoose.model('ThongBao',ThongBao);