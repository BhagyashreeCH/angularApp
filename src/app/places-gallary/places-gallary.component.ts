import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from 'src/services/places-service.service';
import { IPlaceDetails } from 'src/model/placedetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-gallary',
  templateUrl: './places-gallary.component.html',
  styleUrls: ['./places-gallary.component.less']
})
export class PlacesGallaryComponent implements OnInit {

  places:IPlaceDetails[];
  constructor(private placesService:PlacesServiceService, private route: Router) { }

  ngOnInit() {
    this.placesService.getPlaces().subscribe( data => this.places = data);
  }
  placedetails(placeName){
    this.route.navigate(['placedetails', placeName]);
  }
}
