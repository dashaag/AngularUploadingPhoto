import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFilmComponent } from './Components/add-film/add-film.component';
import { EditFilmComponent } from './Components/edit-film/edit-film.component';
import { FilmsListComponent } from './Components/films-list/films-list.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  { path: 'add-film', component: AddFilmComponent, pathMatch: 'full' },
  { path: '', component: FilmsListComponent, pathMatch: 'full' },
  { path: 'edit-film/:id', component: EditFilmComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'user-list', component: UserListComponent, pathMatch: 'full' },
  { path: 'upload-image', component: UploadImageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
