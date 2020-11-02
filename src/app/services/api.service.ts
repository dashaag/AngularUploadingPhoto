import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiLoginResponse, ApiResponse } from '../Models/api.response';
import { SignInModel } from '../Models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loginStatus = new EventEmitter<boolean>();

  signIn(model: SignInModel): Observable<ApiLoginResponse> {
    return this.http.post<ApiLoginResponse>('https://localhost:44362/api/auth/login', model);
  }

  logout(){
    this.loginStatus.emit(false);
    localStorage.removeItem('token');
  }

  uploadPhoto(id: number, form: FormData): Observable<ApiResponse>{
      return this.http.post<ApiResponse>('https://localhost:44362/api/image/upload/'+id, form);
  }  

}