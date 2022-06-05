const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Khu = new Schema({
    TenKhu: { type: String, require: true},
    MoTa: { type: String},
});

module.exports = mongoose.model('Khu',Khu);