import { Component, OnInit } from '@angular/core';
import { ApiCollectionResponse, ApiResponse } from 'src/app/Models/api.response';
import { CategoryModel } from 'src/app/Models/category.model';
import { FilmModel } from 'src/app/Models/film.model';
import { CategoryService } from 'src/app/services/category.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html'
})
export class AddFilmComponent implements OnInit {

  film: FilmModel = new FilmModel();
  categories: Array<CategoryModel>;

  constructor(private filmService: FilmService,
              private categoryService: CategoryService) { }

  ngOnInit() {
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

  addFilm() {
    this.filmService.addFilm(this.film).subscribe((response: ApiResponse) =>{
      if(response.isSuccessFull) {
        alert("Added successfully");
      }
      else {
        console.log(response.message);
        
      }
    })
  }
}
