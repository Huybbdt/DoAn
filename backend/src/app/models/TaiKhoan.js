const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaiKhoan = new Schema({
    nhanVienID: {
        type: Schema.Types.ObjectId,
        ref: "NhanVien",
    },
    Email: { type: String, require: true, unique: true},
    MatKhau: { type: String,  require: true}
});

module.exports = mongoose.model('TaiKhoan',TaiKhoan);