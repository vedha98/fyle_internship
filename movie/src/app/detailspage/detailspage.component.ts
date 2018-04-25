import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
data : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
      this.data = params['data'];
    });
  }

}
