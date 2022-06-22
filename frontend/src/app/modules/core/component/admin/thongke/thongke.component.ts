import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ServiceHttpService } from 'src/app/modules/share/service-http.service';
Chart.register(...registerables);
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss']
})
export class ThongkeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  sinhvien:any;
  phong:any;
  hoadondiennuoc:any;
  bienlaithutien:any;
  nhanvien:any;
  thongbao:any;
  tongTien:any;
  thietbi:any;
  phongTrong:any;
  phanTramSV:any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  public radarChartLabels = ['Tổng sinh viên đang ở', 'Tổng số Phòng', 'Tổng số thông báo'];
  public radarChartData = [
    { data: []as any[], label: 'chỉ số lượng' },
  ];
  public radarChartType = 'radar';
  constructor(private serviceHttp: ServiceHttpService) {
    this.serviceHttp.getSinhVienDangO().subscribe((data: any) => {
      this.sinhvien = data.data;

      this.radarChartData[0].data.push(this.sinhvien.length)
    });
    this.serviceHttp.getAllPhong().subscribe((data: any) => {
      this.phong = data.data;
      this.radarChartData[0].data.push(this.phong.length)

    });
    this.serviceHttp.getPhongTrong().subscribe((data: any) => {
      this.phongTrong = data.data;
    });
    this.serviceHttp.getAllHoaDonDienNuoc().subscribe((data: any) => {
      this.hoadondiennuoc = data.data;
      let total = 0;
      this.hoadondiennuoc.forEach((data: any) => {
        total= total + data.TongTien;
      })
      this.tongTien = total;
    });
    this.serviceHttp.getAllBienLaiThuTien().subscribe((data: any) => {
      this.bienlaithutien = data.data;
      let total = 0;
      this.bienlaithutien.forEach((data: any) => {
        total= total + data.TongTien;
      })
      this.tongTien= this.tongTien  +total;
    });
    this.serviceHttp.getAllThongBao().subscribe((data: any) => {
      this.thongbao = data.data;
      this.radarChartData[0].data.push(this.thongbao.length)
    });
    this.serviceHttp.getAllNhanVien().subscribe((data: any) => {
      this.nhanvien = data.data;
    });
    this.serviceHttp.getAllThietBi().subscribe((data: any) => {
      this.thietbi = data.data;
      let total = 0;
      this.thietbi.forEach((data: any) => {
        total= total + data.SoLuong;
      });
      this.thietbi = total;
    });
    setTimeout(() => {
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.radarChartLabels;
        this.chart.chart.update();
      }
    },200);
   }

  ngOnInit(): void {

  }

}
