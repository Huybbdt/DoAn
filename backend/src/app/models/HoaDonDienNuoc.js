const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoaDonDienNuoc = new Schema({
    nhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    phongID: {
        type: Schema.Types.ObjectId,
        ref: "Phong",
    },
    soDienDau: {type: Number,require: true},
    soDienCuoi: {type: Number,require: true},
    phiDien: {type: Number,require: true},
    soNuocDau: {type: Number,require: true},
    soNuocCuoi: {type: Number,require: true},
    phiNuoc: {type: Number,require: true},
    ngayLap: { type: Date, require: true, default: Date.now()},
    tongTien: { type: Number, require: true}
   
  });

module.exports = mongoose.model('HoaDonDienNuoc',HoaDonDienNuoc);