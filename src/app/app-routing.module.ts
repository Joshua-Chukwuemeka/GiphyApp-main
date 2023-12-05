import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifdetailsComponent } from './gifdetails/gifdetails.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-gif', pathMatch: 'full'},
  {path: 'search-gif', component: SearchbarComponent},
  {path: 'gif-details/:id', component: GifdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
