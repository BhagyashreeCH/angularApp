import { Injectable } from '@angular/core';
import { IPlaceDetails } from '../model/placedetails.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {
  
  constructor(private httpclient:HttpClient) {
    }
  url ="http://localhost:3000/placesList";
  getPlaces(): Observable<IPlaceDetails[]>{
    return this.httpclient.get<IPlaceDetails[]>("http://localhost:3000/placesList");
  }
  addplaces(data:IPlaceDetails): Observable<IPlaceDetails>{
    return this.httpclient.post<IPlaceDetails>(this.url, data, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
    
  }
}
