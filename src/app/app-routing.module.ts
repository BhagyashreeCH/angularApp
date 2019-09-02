import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { PlacesGallaryComponent } from './places-gallary/places-gallary.component';
import { EmptygalleryComponent } from './emptygallery/emptygallery.component';
import { CanactivateguardService } from '../services/canactivateguard.service';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'addItemToGallery',component:UpdateComponent, canDeactivate:[CanDeactivateGuardService]},
  {path:'placesGallery',component:PlacesGallaryComponent, canActivate:[CanactivateguardService]},
  {path:'emptyGallery',component:EmptygalleryComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
