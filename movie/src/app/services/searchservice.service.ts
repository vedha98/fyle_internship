import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchserviceService {

  constructor(private http : Http) { }



  searchbyTitle(){
  return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=caaca514')
.map(res => res.json());
}



}
