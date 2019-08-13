import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpSentEvent } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  id;

  user;
  users;
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(){
    console.log("~".repeat(15)+"user_page")
    this._route.params.subscribe((params:Params) => {
      this.id = params['id'];
    })
    // this.showUser();
    this.showUsers();
  }

  showUser(){
    this._httpService.show_One_User(this.id).subscribe((data) => {
        console.log(data);
        // this.user = data['user'];
    })
  }

  showUsers(){
    this._httpService.show_All_Users().subscribe((data) => {
      console.log(data);
      this.users = data['users'];
    })
  }

}
