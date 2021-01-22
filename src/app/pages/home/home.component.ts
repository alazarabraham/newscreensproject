import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Ingestion } from "../../components/model/Ingestion"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ingestionEndpoint: string = "http://localhost:8080/api/v1/ingestions";
  public ingestionArray = [];

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<Ingestion[]>(this.ingestionEndpoint);

  }


  ngOnInit() {

    // make color light
    var body = document.getElementsByTagName('body')[0];
    body.classList.add("white-content");


    this.getData().
      subscribe(data => {
        console.log(data);
        this.ingestionArray = data;
      })

  }

}
