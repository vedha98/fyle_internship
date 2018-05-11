import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchserviceService {
data : any
  constructor(private http : Http) { }



  searchbyTitle(title){
  this.data = title
  this.setRecent(title);
  return this.http.get('http://www.omdbapi.com/?t='+title+'&apikey=caaca514')
.map(res => res.json());
}
searchbyID(title){
this.setRecent(title);
return this.http.get('http://www.omdbapi.com/?i='+title+'&apikey=caaca514')
.map(res => res.json());
}
searchbyTitled(title){
return this.http.get('http://www.omdbapi.com/?t='+title+'&apikey=caaca514')
.map(res => res.json());
}
getDetails(){

}
getRecents(){
return JSON.parse(localStorage.getItem('recentsearches')).searches
}


setRecent(recent_title){
var recentst = localStorage.getItem('recentsearches')

if(JSON.parse(recentst)==null){
var recents = {
searches:[recent_title]
}
localStorage.setItem('recentsearches',JSON.stringify(recents))
}else{
var rec = JSON.parse(recentst);
if(rec.searches.length+1>5){
rec.searches.shift()
rec.searches.push(recent_title);
}else{
rec.searches.push(recent_title);
}
localStorage.setItem('recentsearches',JSON.stringify(rec))
}
console.log(rec)
}
}
