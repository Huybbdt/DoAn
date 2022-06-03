const loginRouter = require('./Login');

const nhanvienRouter = require('./NhanVien');
const thietbiRouter = require('./ThietBi');
const phongRouter = require('./Phong');
const sinhvienRouter = require('./SinhVien');
const thongbaoRouter = require('./ThongBao');
const khuRouter = require('./Khu');
const taikhoanRouter = require('./TaiKhoan');
const hoadondiennuocRouter = require('./HoaDonDienNuoc');
const bienlaithutienRouter = require('./BienLaiThuTien');

function route(app) {

  app.use('/login', loginRouter);
  app.use('/nhanvien', nhanvienRouter);
  app.use('/thietbi', thietbiRouter);
  app.use('/phong', phongRouter);
  app.use('/sinhvien', sinhvienRouter);
  app.use('/thongbao', thongbaoRouter);
  app.use('/taikhoan', taikhoanRouter);
  app.use('/khu', khuRouter);
  app.use('/hoadondiennuoc', hoadondiennuocRouter);
  app.use('/bienlaithutien', bienlaithutienRouter);

}

module.exports = route;
