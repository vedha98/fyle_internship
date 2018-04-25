import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchserviceService } from '../services/searchservice.service';
@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
data : any;
details: any;
  constructor(private route: ActivatedRoute,private searchservice:SearchserviceService) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
      this.data = params['title'];
    });
    this.searchservice.searchbyTitled(this.data).subscribe(data =>{
    this.details = JSON.stringify(data);

  }

}
