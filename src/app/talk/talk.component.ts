import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpSentEvent } from '@angular/common/http';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    private _route:ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
}
