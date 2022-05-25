const HoaDonDienNuoc = require('../models/HoaDonDienNuoc');

require('dotenv').config();
class NewController {
  async getAllHoaDonDienNuoc(req, res, next) {
    try {
      const data = await HoaDonDienNuoc.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getHoaDonDienNuoc(req, res, next) {
    try {
      const data = await HoaDonDienNuoc.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createHoaDonDienNuoc(req, res, next) {
    let data = await HoaDonDienNuoc.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editHoaDonDienNuoc(req, res) {
    try {
      let data = await HoaDonDienNuoc.findByIdAndUpdate(req.params.id).exec();
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

  async deleteHoaDonDienNuoc(req, res) {
    try {
      const data = await HoaDonDienNuoc.findByIdAndDelete({ _id: req.params.id });
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
