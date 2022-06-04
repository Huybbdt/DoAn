const TaiKhoan = require('../models/TaiKhoan');
const bcrypt = require('bcrypt');
require('dotenv').config();
class NewController {
  async getAllTaiKhoan(req, res, next) {
    try {
      const data = await TaiKhoan.find();
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.json({ message: error });
    }
  }
  async getTaiKhoan(req, res, next) {
    try {
      const data = await TaiKhoan.findById({ _id: req.params.id});
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  async createTaiKhoan(req, res, next) {
    let data = await TaiKhoan.create(req.body);
    res.json({
      message: 'success',
      data: data,
    });
  }
  
  async editTaiKhoan(req, res) {
    try {
        if(req.body.MatKhau == '' || req.body.Email == ''){
            res.json({
                message: 'Email hoặc Mật khẩu Không được để trống',
                status: 404,
              });
        }  
        let data = await TaiKhoan.findByIdAndUpdate(req.params.id).exec();
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

  async deleteTaiKhoan(req, res) {
    try {
      const data = await TaiKhoan.findByIdAndDelete({ _id: req.params.id });
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
