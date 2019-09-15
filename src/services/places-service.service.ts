import { Injectable } from '@angular/core';
import { IPlaceDetails } from '../model/placedetails.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {
  
  placeDetails: Observable<IPlaceDetails[]>;
  
  constructor(private httpclient:HttpClient) {
    this.loadFromServer();
    }
  //url ="http://localhost:3000/placesList";
  geturl : string = "/assets/db.json"

  private loadFromServer() {
    this.placeDetails = this.httpclient.get<IPlaceDetails[]>(this.geturl);
  }

  getPlaces(): Observable<IPlaceDetails[]>{
    return this.placeDetails;
  }
  //addplaces(data:IPlaceDetails): Observable<IPlaceDetails>{
   // return this.httpclient.post<IPlaceDetails>(this.url, data, {
      //headers: new HttpHeaders({
        //'Content-Type' : 'application/json'
      //})
    //})
    
  //}
  getPlacedetails(name): Observable<IPlaceDetails>{
    return this.placeDetails
    .map(places => places.filter(place => place.placeName === name)[0]);
  }
}
