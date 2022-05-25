const PhiKTX = require('../models/PhiKTX');

require('dotenv').config();
class NewController {
  async getAllPhiKTX(req, res, next) {
    try {
      const data = await PhiKTX.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getPhiKTX(req, res, next) {
    try {
      const data = await PhiKTX.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createPhiKTX(req, res, next) {
    let data = await PhiKTX.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editPhiKTX(req, res) {
    try {
      let data = await PhiKTX.findByIdAndUpdate(req.params.id).exec();
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

  async deletePhiKTX(req, res) {
    try {
      const data = await PhiKTX.findByIdAndDelete({ _id: req.params.id });
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
