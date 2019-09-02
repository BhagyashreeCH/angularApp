import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { PlacesServiceService } from '../services/places-service.service';
@Injectable({
  providedIn: 'root'
})
export class CanactivateguardService implements CanActivate{
  places;
  constructor(private placesService:PlacesServiceService, private router: Router) { }
   canActivate(activeroute: ActivatedRouteSnapshot, routerstate: RouterStateSnapshot):boolean{
      this.places = this.placesService.getPlaces();
      if(this.places){
        return true;
      } 
      else{
        this.router.navigate(['emptyGallery']);
        return false;
      }
  }
}
