const ThietBi = require('../models/ThietBi');

require('dotenv').config();
class NewController {
  async getAllThietBi(req, res, next) {
    try {
      const data = await ThietBi.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getThietBi(req, res, next) {
    try {
      const data = await ThietBi.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createThietBi(req, res, next) {
    let data = await ThietBi.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editThietBi(req, res) {
    try {
      let data = await ThietBi.findByIdAndUpdate(req.params.id).exec();
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

  async deleteThietBi(req, res) {
    try {
      const data = await ThietBi.findByIdAndDelete({ _id: req.params.id });
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
