import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  infoFilm: any;
  listFilm: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }

}
