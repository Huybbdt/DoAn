const Course = require('../models/Course');
const { mutipleMongooseToOject } = require('../../util/mongoose');
class NewController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        console.log(courses);
        res.render('news', {
          courses: mutipleMongooseToOject(courses),
        });
      })
      .catch(next);
    // res.render('home');
  }
}
module.exports = new NewController();
