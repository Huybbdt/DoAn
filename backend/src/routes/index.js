const newRouter = require('./new');
const loginRouter = require('./login');
const forgotPasswordRouter = require('./forgotPassword');
function route(app) {
  app.use('/new', newRouter);
  app.use('/login', loginRouter);
  app.use('/forgot-password', forgotPasswordRouter);
  app.get('/', (req, res) => {
    res.render('home');
  });
}

module.exports = route;
