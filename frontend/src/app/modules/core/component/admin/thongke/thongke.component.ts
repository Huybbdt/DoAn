import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss']
})
export class ThongkeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50], label: 'Series A'},
    {data: [48, 38, 65, 39, 66, 17, 80], label: 'Series B'}
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
