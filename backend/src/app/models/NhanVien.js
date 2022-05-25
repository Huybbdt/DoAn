const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NhanVien = new Schema({
    hoTen: { type: String, require: true},
    ngaySinh: { type: Date, require: true},
    diaChi: { type: String, require: true},
    chucVu: { type: String, require: true},
    gioiTinh: { type: String, require: true},
    sdt: { type: String, require: true},
    cmnd: { type: String, require: true},
    email: { type: String, require: true, unique: true},
    username: { type: String, require: true, minLength: 6, maxLength: 20, unique: true},
    password: { type: String, require: true, minLength:8, maxLength: 32},
  });

module.exports = mongoose.model('NhanVien',NhanVien);