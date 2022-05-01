
class forgotPasswordController {
  index(req, res, next) {
    res.render('forgotPassword');
  }
}
module.exports = new forgotPasswordController();
