const SinhVien = require('../models/SinhVien');

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
    let data = await SinhVien.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editSinhVien(req, res) {
    try {
      let data = await SinhVien.findByIdAndUpdate(req.params.id).exec();
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

  async deleteSinhVien(req, res) {
    try {
      const data = await SinhVien.findByIdAndDelete({ _id: req.params.id });
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
