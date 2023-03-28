
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties : Array<IProperty> = [];

  constructor(private route : ActivatedRoute, private housingService : HousingService) { }

  ngOnInit() : void {

    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      }, error =>{
        console.log('http error');
        console.log(error);
      }
    )
  }

}
