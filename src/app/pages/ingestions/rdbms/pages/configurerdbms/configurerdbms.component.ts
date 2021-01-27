import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-configurerdbms',
  templateUrl: './configurerdbms.component.html',
  styleUrls: ['./configurerdbms.component.scss']
})
export class ConfigurerdbmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");

  }

}
