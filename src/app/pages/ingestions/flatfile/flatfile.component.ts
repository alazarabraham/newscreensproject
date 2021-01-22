import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flatfile',
  templateUrl: './flatfile.component.html',
})
export class FlatfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // make color light
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");


  }

}


