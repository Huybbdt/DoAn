const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoaDonDienNuoc = new Schema({
    NhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    PhongID: {
        type: Schema.Types.ObjectId,
        ref: "Phong",
    },
    HoTenNguoiNop: {type: String},
    ChiSoDienDauKy: {type: Number,require: true},
    ChiSoDienCuoiKy: {type: Number,require: true},
    DonGiaDien: {type: Number,require: true},
    ChiSoNuocDauKy: {type: Number,require: true},
    ChiSoNuocDauKy: {type: Number,require: true},
    DonGiaNuoc: {type: Number,require: true},
    TongTien: { type: Number, require: true},
    NgayLap: { type: Date},
   
  });

module.exports = mongoose.model('HoaDonDienNuoc',HoaDonDienNuoc);