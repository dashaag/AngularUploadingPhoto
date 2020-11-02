import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCollectionResponse } from 'src/app/Models/api.response';
import { FilmModel } from 'src/app/Models/film.model';
import { FilmService } from 'src/app/services/film.service';
import { AddFilmComponent } from '../add-film/add-film.component';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films: Array<FilmModel>;

  constructor(private filmService: FilmService,
    private router: Router) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((response: ApiCollectionResponse) => {
      if (response.isSuccessFull === true) {
        this.films = response.result;
        console.log(this.films);
      }
      else {
        console.log(response.message);
      }

    });
  }
  addFilm() {
    this.router.navigate(['/add-film']);
  }

  removeFilm(id: number) {
    this.filmService.removeFilm(id).subscribe((response) => {
      if (response.isSuccessFull) {
        this.ngOnInit();
      }
      else {
        alert(response.message);
      }
    });

  }

  editFilm(id: number) {
    
  }
}
