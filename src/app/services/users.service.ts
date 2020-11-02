import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse } from '../Models/api.response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient) { }

getUsers(): Observable<ApiCollectionResponse>{
  return this.http.get<ApiCollectionResponse>('https://localhost:44362/api/userManager');
}

}
