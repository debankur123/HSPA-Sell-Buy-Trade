import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http : HttpClient) { }
  
  //Here we are returning Observable of IProperties.
  getAllProperties(SellRent: number) : Observable<IProperty[]>{
    return this.http.get<{ [key: string]: any }>("assets/properties.json")
      .pipe(
        map(data => {
          const propertiesArray : Array<IProperty> = [];
          for(const id in data){
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;
        })
      )
  }
}
