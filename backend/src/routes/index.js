const loginRouter = require('./login');
const nhanvienRouter = require('./nhanvien');
const sinhvienRouter = require('./sinhvien');
const thietbiRouter = require('./thietbi');
const phongRouter = require('./phong');
const thongbaoRouter = require('./thongbao');
const hoadondiennuocRouter = require('./hoadondiennuoc');
const phiktxRouter = require('./phiktx');


const authenticateToken = require('../middlewares/login.middleware');
function route(app) {
  app.use('/api/v1/login', loginRouter);
  app.use('/api/v1/nhanvien', nhanvienRouter);
  app.use('/api/v1/thietbi', thietbiRouter);
  app.use('/api/v1/phong', phongRouter);
  app.use('/api/v1/sinhvien', sinhvienRouter);
  app.use('/api/v1/thongbao', thongbaoRouter);
  app.use('/api/v1/hoadondiennuoc', hoadondiennuocRouter);
  app.use('/api/v1/phiktx', phiktxRouter);

}

module.exports = route;
