import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private apiService: ApiService) { 
    var token = localStorage.getItem('token');
    if(token != null){
      this.isLoggedIn = true;
    }
    this.apiService.loginStatus.subscribe((status)=>{
      this.isLoggedIn = status;
      
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.apiService.logout();
  }

}
