import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiCollectionResponse } from 'src/app/Models/api.response';
import { CategoryModel } from 'src/app/Models/category.model';
import { FilmModel } from 'src/app/Models/film.model';
import { CategoryService } from 'src/app/services/category.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  film: FilmModel = new FilmModel;
  categories: Array<CategoryModel>;
  id: any;

  constructor(private categoryService: CategoryService,
              private filmService: FilmService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(this.id).subscribe((response) =>{
      if(response.isSuccessFull) {
        this.film = response.result;
      }
      else {
        console.log(response.message);
      }
    })

    this.categoryService.getCategories().subscribe((response: ApiCollectionResponse)=>{
      if(response.isSuccessFull) {
        this.categories = response.result;
        this.film.categoryName = this.categories[0].name;
      }
      else {
        console.log(response.message);
      }
    })
  }

}
