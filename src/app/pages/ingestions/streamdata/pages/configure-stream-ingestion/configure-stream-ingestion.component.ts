import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-stream-ingestion',
  templateUrl: './configure-stream-ingestion.component.html',
  styleUrls: ['./configure-stream-ingestion.component.scss']
})
export class ConfigureStreamIngestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // make color light
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");


  }

}
