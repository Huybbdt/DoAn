const SinhVien = require('../models/SinhVien');
const Phong = require('../models/Phong');

require('dotenv').config();
class NewController {
  async getAllSinhVien(req, res, next) {
    try {
      const data = await SinhVien.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getSinhVien(req, res, next) {
    try {
      const data = await SinhVien.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createSinhVien(req, res, next) {
    let phong =  await Phong.findById(req.body.PhongID);
    if(phong.SoLuongDangO >= phong.SoLuongChua ){
      return res.json({
        message: 'faild',
      });
    }
    let data = await SinhVien.create(req.body);
    let dataPhong = await Phong.findByIdAndUpdate({_id: data.PhongID},{
      $inc: {SoLuongDangO:  1}
    })
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editSinhVien(req, res) {
    try {
      let dataBeforeUpdate =  await SinhVien.findById({ _id: req.params.id});
      let dataPhongCu = await Phong.findByIdAndUpdate({_id: dataBeforeUpdate.PhongID},{
        $inc: {SoLuongDangO:  -1}
      });
      let data = await SinhVien.findByIdAndUpdate({_id: req.params.id},req.body);
      let dataMoi = await SinhVien.findById({_id: req.params.id});
      let dataPhongMoi = await Phong.findByIdAndUpdate({_id: dataMoi.PhongID},{
        $inc: {SoLuongDangO:  1}
      })
      res.json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getSinhVienDangO(req, res, next) {
    try {
      const data = await SinhVien.find();
      const sinhvienDangO = data.filter((item)=> item.TrangThai == 'Đang ở');
      res.status(201).json({
        message: 'success',
        data: sinhvienDangO,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getSinhVienChoDuyet(req, res, next) {
    try {
      const data = await SinhVien.find();
      const getSinhVienChoDuyet = data.filter((item)=> item.TrangThai == 'Đang chờ duyệt');
      res.status(201).json({
        message: 'success',
        data: getSinhVienChoDuyet,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async deleteSinhVien(req, res) {
    try {
      const data = await SinhVien.findByIdAndDelete({ _id: req.params.id });
      let dataPhong = await Phong.findByIdAndUpdate({_id: data.PhongID},{
        $inc: {SoLuongDangO:  -1}
      })
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
module.exports = new NewController();
