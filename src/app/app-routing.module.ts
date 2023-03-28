import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  {path: 'rent-property' , component:PropertyListComponent},
  {path: 'add-property' , component:AddPropertyComponent},
  {path: '' , component:PropertyListComponent},
  {path: 'property-details/:id' , component:PropertyDetailsComponent},
  {path: '**' , component:PropertyListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
