import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {
 reload: number ;
  private url = 'http://127.0.0.1:3000/'
  constructor(private httpClient: HttpClient) {}
  private httOptions ={
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    }),
  };

  public postLogin(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}login`,data);
  }
// nhân viên
  public getAllNhanVien(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}nhanvien`, this.httOptions);
  }
  public createNhanVien(nhanvien: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}nhanvien/create`,nhanvien, this.httOptions);
  }

  public getNhanVien(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.url}nhanvien/${id}`, this.httOptions);
  }

  public updateNhanVien(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}nhanvien/edit/${id}`,data, this.httOptions);
  }
  public deleteNhanVien(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}nhanvien/delete/${id}`, this.httOptions);
  }
// khu
  public getAllKhu(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}khu`, this.httOptions);
  }
// Phòng
  public getAllPhong(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}phong`, this.httOptions);
  }
  public getPhongTrong(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}phong/phongtrong`, this.httOptions);
  }
  public createPhong(phong: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}phong/create`,phong, this.httOptions);
  }

  public getPhong(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}phong/${id}`, this.httOptions);
  }

  public updatePhong(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}phong/edit/${id}`,data, this.httOptions);
  }
  public deletePhong(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}phong/delete/${id}`, this.httOptions);
  }
  // sinh viên
  public getAllSinhVien(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}sinhvien`, this.httOptions);
  }
  public createSinhVien(sinhvien: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}sinhvien/create`,sinhvien, this.httOptions);
  }

  public getSinhVien(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}sinhvien/${id}`, this.httOptions);
  }
  public getSinhVienDangO(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}sinhvien/sinhviendango`, this.httOptions);
  }
  public getSinhVienChoDuyet(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}sinhvien/sinhviendangchoduyet`, this.httOptions);
  }

  public updateSinhVien(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}sinhvien/edit/${id}`,data, this.httOptions);
  }
  public deleteSinhVien(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}sinhvien/delete/${id}`, this.httOptions);
  }
  // tài khoản
  public getAllTaiKHoan(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}taikhoan`, this.httOptions);
  }
  public createTaiKHoan(taikhoan: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}taikhoan/create`,taikhoan, this.httOptions);
  }

  public getTaiKHoan(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}taikhoan/${id}`, this.httOptions);
  }

  public updateTaiKHoan(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}taikhoan/edit/${id}`,data, this.httOptions);
  }
  public deleteTaiKHoan(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}taikhoan/delete/${id}`, this.httOptions);
  }
  // Thông báo
  public getAllThongBao(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}thongbao`, this.httOptions);
  }
  public createThongBao(thongbao: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}thongbao/create`,thongbao, this.httOptions);
  }

  public getThongBao(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}thongbao/${id}`, this.httOptions);
  }

  public updateThongBao(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}thongbao/edit/${id}`,data, this.httOptions);
  }
  public deleteThongBao(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}thongbao/delete/${id}`, this.httOptions);
  }
  // Biên lai thu tiền
  public getAllBienLaiThuTien(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}bienlaithutien`, this.httOptions);
  }
  public createBienLaiThuTien(bienlaithutien: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}bienlaithutien/create`,bienlaithutien, this.httOptions);
  }

  public getBienLaiThuTien(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}bienlaithutien/${id}`, this.httOptions);
  }

  public updateBienLaiThuTien(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}bienlaithutien/edit/${id}`,data, this.httOptions);
  }
  public deleteBienLaiThuTien(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}bienlaithutien/delete/${id}`, this.httOptions);
  }

  // Biên lai thu tiền
  public getAllHoaDonDienNuoc(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}hoadondiennuoc`, this.httOptions);
  }
  public createHoaDonDienNuoc(hoadondiennuoc: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}hoadondiennuoc/create`,hoadondiennuoc, this.httOptions);
  }

  public getHoaDonDienNuoc(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}hoadondiennuoc/${id}`, this.httOptions);
  }

  public updateHoaDonDienNuoc(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}hoadondiennuoc/edit/${id}`,data, this.httOptions);
  }
  public deleteHoaDonDienNuoc(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}hoadondiennuoc/delete/${id}`, this.httOptions);
  }
  public getHoaDonDienNuocChuaNop(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}hoadondiennuoc/chuanop`, this.httOptions);
  }
  // thiết bị
  public getAllThietBi(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}thietbi`, this.httOptions);
  }
  public createThietBi(thietbi: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}thietbi/create`,thietbi, this.httOptions);
  }

  public getThietBi(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}thietbi/${id}`, this.httOptions);
  }

  public updateThietBi(data:any,id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.url}thietbi/edit/${id}`,data, this.httOptions);
  }
  public deleteThietBi(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}thietbi/delete/${id}`, this.httOptions);
  }
}
