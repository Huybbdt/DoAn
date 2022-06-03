const Phong = require('../models/Phong');

require('dotenv').config();
class NewController {
  async getAllPhong(req, res, next) {
    try {
      const data = await Phong.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getPhong(req, res, next) {
    try {
      const data = await Phong.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createPhong(req, res, next) {
    let data = await Phong.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editPhong(req, res) {
    try {
      let data = await Phong.findByIdAndUpdate(req.params.id).exec();
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

  async deletePhong(req, res) {
    try {
      const data = await Phong.findByIdAndDelete({ _id: req.params.id });
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
