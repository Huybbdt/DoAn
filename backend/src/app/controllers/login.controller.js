const NhanVien = require('../models/NhanVien');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
require('dotenv').config();
class loginController {
  async index(req, res, next) {
    res.render('login');
  }
  async postLogin(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'fail to login' });
    }
    try {
      const user = await NhanVien.findOne({ username });
      console.log(user);
      if (!user) {
        return res.json({ message: 'user invalid' });
      }
      // const validPass = argon2.verify(user.password, password);

      if (password != user.password) {
        return res.json({ message: 'password invalid' });
      }

      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.SECRET_TOKEN,
        {
          expiresIn: 20,
        }
      );

      res.send({
        status: 200,
        message: 'Success',
        token: accessToken,
        data: user
      });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = new loginController();
//
