import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor() { }
  private name = new BehaviorSubject<string>('Lorem Ipsum Test');
  getname= this.name.asObservable();

  updatename(newName){
    this.name.next(newName);
  }
}
