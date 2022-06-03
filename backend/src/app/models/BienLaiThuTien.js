const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BienLaiThuTien = new Schema({
    NhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    SinhVienID: {
        type: Schema.Types.ObjectId,
        ref: "SinhVien",
    },
    HocKy: { type: String, require: true},
    NamHoc: { type: String, require: true,minLength:4,MaxLength:4},
    TongTien: { type: Number, require: true},
    NgayLap: { type: Date, require: true}

});

module.exports = mongoose.model('BienLaiThuTien',BienLaiThuTien);