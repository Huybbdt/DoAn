const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HopDong = new Schema({
    nhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    sinhVienID: {
        type: Schema.Types.ObjectId,
        ref: "SinhVien",
    },
    ngayLap: { type: String, require: true},
    ngayBatDau: { type: Number, require: true},
    ngayKetThuc: { type: String, require: true},
   
  });

module.exports = mongoose.model('HopDong',HopDong);