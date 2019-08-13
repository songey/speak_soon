import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpSentEvent } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  users;
  
  constructor(
    private _httpService: HttpService,
    private _route:ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showUsers();
  }

  showUsers(){
    this._httpService.show_All_Users().subscribe((data) => {
      console.log(data);

      this.users = data['users'];
    
    })
  }
/////////////////////////////
////////////////////
}
