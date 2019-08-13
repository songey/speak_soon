import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpSentEvent } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    private _route:ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  updateUser(){
    this._router.navigate(['home']);
  }
}
