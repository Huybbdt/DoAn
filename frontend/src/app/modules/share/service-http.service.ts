import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

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

  public getNhanVien(id: number): Observable<any> {
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
}
