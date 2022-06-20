const ThongBao = require('../models/ThongBao');
const cloudinary = require('../../utils/cloudinary');

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
      const data = await ThongBao.findById({ _id: req.params.id });
      res.status(201).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async createThongBao(req, res, next) {
    const path = req.file;
    let result;
    if (!path) {
      return res.json({ message: 'chua cos anh' });
    }
    result = await cloudinary.uploader.upload(path?.path);

    let data = await ThongBao.create({
      Anh: result?.secure_url,
      cloudinary_id: result.public_id,
      ...req.body,
    });
    res.json({
      message: 'success',
      data: data,
    });
  }

  async editThongBao(req, res) {
    try {
      const path = req.file;
      const _id = req.params.id;
      let user_cloud = await ThongBao.findById(req.params.id);
      if (user_cloud?.public_id) {
        await cloudinary.uploader.destroy(user_cloud?.cloudinary_id);
      }
      let avatar;
      if (path) {
        avatar = await cloudinary.uploader.upload(path.path);
      }
      let result = await ThongBao.findByIdAndUpdate(_id, {
        Anh: avatar.secure_url || user_cloud?.cloudinary_id,
        cloudinary_id: avatar.public_id || user_cloud?.cloudinary_id,
        ...req.body,
      });
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
