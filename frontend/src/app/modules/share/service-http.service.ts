import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  private url = 'http://127.0.0.1:3000/api/v1/'
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
  public getAllNhanVien(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}nhanvien`, this.httOptions);
  }
  public postLogin(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}login`,data);
  }

  public getShops(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}shops/${id}`, this.httOptions);
  }
  public getProduct(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}products/${id}`, this.httOptions);
  }

  public getForgotPassword(email: any): Observable<any> {
    return this.httpClient.post<any>(
      `${this.url}forgot-password`,
      email,
      this.httOptions
    );
  }
  public postChangePassword(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}change-password`,data);
  }
  public getCategories(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}categories`, this.httOptions);
  }
  public createCategories(categories: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}categories/create`,categories, this.httOptions);
  }
  public deleteCategories(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}categories/delete/${id}`, this.httOptions);
  }
  public updateCategories(data:any,id: number): Observable<any> {
    return this.httpClient.patch<any>(`${this.url}categories/update/${id}`,data, this.httOptions);
  }
  public getUser(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}users/${id}`, this.httOptions);
  }
  public getListUser(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}users/shop-users-unregistered-shop`, this.httOptions);
  }
  public updateShops(data:any,id: number): Observable<any> {
    return this.httpClient.patch<any>(`${this.url}shops/update/${id}`,data, this.httOptions);
  }
  public uploadShops(data:any,id: number): Observable<any> {
    return this.httpClient.post<any>(`${this.url}shops/upload/${id}`,data, {
      headers: {
        'Content-Type': "multipart/form-data;  boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'",
      },
    });
  }
}
