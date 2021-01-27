import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-flat-file-ingestion',
  templateUrl: './configure-flat-file-ingestion.component.html',
  styleUrls: ['./configure-flat-file-ingestion.component.scss']
})
export class ConfigureFlatFileIngestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");

  }

}
