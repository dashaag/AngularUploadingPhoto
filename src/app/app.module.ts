import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './Components/films-list/films-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AddFilmComponent } from './Components/add-film/add-film.component';
import { EditFilmComponent } from './Components/edit-film/edit-film.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { TokenInterceptor } from './helpers/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import uk from '@angular/common/locales/uk';
import { UploadImageComponent } from './upload-image/upload-image.component';

registerLocaleData(uk);

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    AddFilmComponent,
    EditFilmComponent,
    NavBarComponent,
    SignInComponent,
    UserListComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NzUploadModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: NZ_I18N, useValue: uk_UA }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
