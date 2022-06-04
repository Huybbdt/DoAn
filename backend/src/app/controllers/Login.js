const TaiKhoan = require('../models/TaiKhoan');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
class loginController {
  async postLogin(req, res) {
    const { Email, MatKhau } = req.body;
    if (!Email || !MatKhau) {
      return res.status(400).json({ message: 'Email hoặc mật khẩu không được trống' });
    }
    try {
      const data = await TaiKhoan.findOne({ Email , MatKhau });
      if (!data) {
        return res.json({ message: 'Email hoặc mật khẩu Không đúng' });
      }
      const accessToken = jwt.sign(
        { Emai: data.Emai },
          process.env.SECRET_TOKEN,
        {
          expiresIn: 20,
        }
      );
     
      res.send({
        status: 200,
        message: 'Success',
        token: accessToken,
        data: {NhanvienID: data.NhanVienID, Email: data.Email}
      });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = new loginController();
//
