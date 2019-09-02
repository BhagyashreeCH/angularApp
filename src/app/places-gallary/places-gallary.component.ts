import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from 'src/services/places-service.service';
import { IPlaceDetails } from 'src/model/placedetails.model';
@Component({
  selector: 'app-places-gallary',
  templateUrl: './places-gallary.component.html',
  styleUrls: ['./places-gallary.component.less']
})
export class PlacesGallaryComponent implements OnInit {

  places:IPlaceDetails[];
  constructor(private placesService:PlacesServiceService) { }

  ngOnInit() {
    this.placesService.getPlaces().subscribe( data => this.places = data);
  }

}
