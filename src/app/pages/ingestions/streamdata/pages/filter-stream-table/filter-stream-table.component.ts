import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-stream-table',
  templateUrl: './filter-stream-table.component.html',
  styleUrls: ['./filter-stream-table.component.scss']
})
export class FilterStreamTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");

  }

}
