import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-rdbms-tables',
  templateUrl: './filter-rdbms-tables.component.html',
  styleUrls: ['./filter-rdbms-tables.component.scss']
})
export class FilterRdbmsTablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");

  }

}
