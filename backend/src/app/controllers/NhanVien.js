const NhanVien = require('../models/NhanVien');

require('dotenv').config();
class NewController {
  async getAllNhanVien(req, res, next) {
    try {
      const data = await NhanVien.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getNhanVien(req, res, next) {
    
    try {
      const data = await NhanVien.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createNhanVien(req, res, next) {
    let data = await NhanVien.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editNhanVien(req, res) {
    try {
      let data = await NhanVien.findByIdAndUpdate(req.params.id).exec();
      data.set(req.body);
      let result = await data.save();
      res.json({
        message: 'success',
        data: result,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteNhanVien(req, res) {
    try {
      const data = await NhanVien.findByIdAndDelete({ _id: req.params.id });
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
