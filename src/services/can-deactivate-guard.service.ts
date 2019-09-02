import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UpdateComponent } from '../app/update/update.component';
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<UpdateComponent> {

  constructor() { }
  moveToOtherPage:boolean = true;
  canDeactivate(component:UpdateComponent):boolean {
    if(this.moveToOtherPage == true){
      return confirm("You want to redirect to another page?");
    }
    return true;
  };
}
