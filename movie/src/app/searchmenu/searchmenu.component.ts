import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../services/searchservice.service';
import {Http, Headers} from '@angular/http';
@Component({
  selector: 'app-searchmenu',
  templateUrl: './searchmenu.component.html',
  styleUrls: ['./searchmenu.component.css']
})
export class SearchmenuComponent implements OnInit {
title : String;
  constructor(private searchservice:SearchserviceService,private http : Http ) { }

  ngOnInit(): void {

    }

    getcalled(){
    var details
  this.searchservice.searchbyTitle(this.title).subscribe(data =>{
  console.log(data.Title)

  })

}
}
