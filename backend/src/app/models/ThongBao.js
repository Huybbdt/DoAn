const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThongBao = new Schema({
    nhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    tieuDe: { type: String, require: true},
    noiDung: { type: String},
    anh: { type: String},
   
  });

module.exports = mongoose.model('ThongBao',ThongBao);