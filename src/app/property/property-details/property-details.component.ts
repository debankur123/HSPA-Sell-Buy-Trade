import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId! : number;
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) =>{
        this.propertyId = Number(params['id']);
      }
    )
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-details/' + this.propertyId]);
  }

}
