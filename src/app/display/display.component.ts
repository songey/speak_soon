import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpSentEvent } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    private _route:ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logIn(){
    this._router.navigate(['home']);
    // this.HttpService.log_In_User().subscribe((data) => {
      // console.log(data);
    // })
  }

  registerUser(){
    this._router.navigate(['update']);
  }


/////////////////////
//////////
}
