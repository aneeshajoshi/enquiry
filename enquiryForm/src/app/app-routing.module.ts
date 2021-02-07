import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [{path:'',component:ContactComponent},
{path:'listing',component:ListingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
