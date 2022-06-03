const Khu = require('../models/Khu');

require('dotenv').config();
class NewController {
  async getAllKhu(req, res, next) {
    try {
      const data = await Khu.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getKhu(req, res, next) {
    try {
      const data = await Khu.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createKhu(req, res, next) {
    let data = await Khu.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editKhu(req, res) {
    try {
      let data = await Khu.findByIdAndUpdate(req.params.id).exec();
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

  async deleteKhu(req, res) {
    try {
      const data = await Khu.findByIdAndDelete({ _id: req.params.id });
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
