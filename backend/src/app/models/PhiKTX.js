const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhiKTX = new Schema({
    nhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    sinhVienID: {
        type: Schema.Types.ObjectId,
        ref: "SinhVien",
    },
    namHoc: { type: String, require: true},
    hocky: { type: String, require: true},
    soTienDaThu: { type: Number, require: true},  
});

module.exports = mongoose.model('PhiKTX',PhiKTX);