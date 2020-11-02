import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginResponse } from '../Models/api.response';
import { SignInModel } from '../Models/sign-in.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: SignInModel = new SignInModel();
  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.apiService.signIn(this.user).subscribe((response: ApiLoginResponse) => {
      if (response.isSuccessFull) {
        const jwtData = response.token.split('.')[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        if(decodedJwtData.email==this.user.email){
          localStorage.setItem('token', response.token);
          this.apiService.loginStatus.emit(true);
          this.router.navigate(['/']);
        }
        else{
          console.log('Error');
        }
        
      }
      else {
        console.log(response.message);
      }
    });
  }
}
