import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streamdata',
  templateUrl: './streamdata.component.html',
  styleUrls: ['./streamdata.component.scss']
})
export class StreamdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // make color light
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");


  }

}
