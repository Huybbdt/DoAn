const BienLaiThuTien = require('../models/BienLaiThuTien');

require('dotenv').config();
class NewController {
  async getAllBienLaiThuTien(req, res, next) {
    try {
      const data = await BienLaiThuTien.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getBienLaiThuTien(req, res, next) {
    try {
      const data = await BienLaiThuTien.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createBienLaiThuTien(req, res, next) {
    let data = await BienLaiThuTien.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editBienLaiThuTien(req, res) {
    try {
      let data = await BienLaiThuTien.findByIdAndUpdate(req.params.id).exec();
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

  async deleteBienLaiThuTien(req, res) {
    try {
      const data = await BienLaiThuTien.findByIdAndDelete({ _id: req.params.id });
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
