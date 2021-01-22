import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdbms',
  templateUrl: './rdbms.component.html',
  styleUrls: ['./rdbms.component.scss']
})
export class RdbmsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // make color light
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");


  }



}

