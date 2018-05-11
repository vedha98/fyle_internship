import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../services/searchservice.service';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
@Component({
  selector: 'app-searchmenu',
  templateUrl: './searchmenu.component.html',
  styleUrls: ['./searchmenu.component.css']
})
export class SearchmenuComponent implements OnInit {
title : String;
advanced: Boolean;
imdbID:String;
  constructor(private searchservice:SearchserviceService,private http : Http, private route: Router ) { }

  ngOnInit(): void {

    }

    getcalled(){
    var details
  this.searchservice.searchbyTitle(this.title).subscribe(data =>{
  console.log(data)
  if(data.Response == "True"){
  this.route.navigate(['detailspage/'+data.Title])
  }else{
  alert(data.Error)
  }


  })

}
getcalledID(){
var details
this.searchservice.searchbyID(this.imdbID).subscribe(data =>{
console.log(data)
if(data.Response == "True"){
this.route.navigate(['detailspage/'+data.Title])
}else{
alert(data.Error)
}


})

}
}
