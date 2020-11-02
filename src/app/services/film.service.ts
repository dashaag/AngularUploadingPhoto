import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ApiCollectionResponse, ApiResponse, ApiSingleResponse } from '../Models/api.response';
import { Observable } from 'rxjs';
import { FilmModel } from '../Models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

constructor(private http: HttpClient) { }

  getFilms(): Observable<ApiCollectionResponse> {
    return this.http.get<ApiCollectionResponse>('https://localhost:44362/api/Films');
  }

  getFilm(id: number): Observable<ApiSingleResponse> {
    return this.http.get<ApiSingleResponse>('https://localhost:44362/api/Films/getFilm/'+id);
  }

  addFilm(model: FilmModel): Observable<ApiResponse> {
    model.categoryName = "Adventure";
    console.log(model);
    
    return this.http.post<ApiResponse>('https://localhost:44362/api/Films/add',model);
  }

  removeFilm(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>('https://localhost:44362/api/Films/remove/'+id);

  }
}
