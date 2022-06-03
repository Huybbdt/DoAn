const ThongBao = require('../models/ThongBao');

require('dotenv').config();
class NewController {
  async getAllThongBao(req, res, next) {
    try {
      const data = await ThongBao.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getThongBao(req, res, next) {
    try {
      const data = await ThongBao.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createThongBao(req, res, next) {
    let data = await ThongBao.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editThongBao(req, res) {
    try {
      let data = await ThongBao.findByIdAndUpdate(req.params.id).exec();
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

  async deleteThongBao(req, res) {
    try {
      const data = await ThongBao.findByIdAndDelete({ _id: req.params.id });
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
