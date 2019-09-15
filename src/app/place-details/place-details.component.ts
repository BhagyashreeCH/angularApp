import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesServiceService } from 'src/services/places-service.service';
import { IPlaceDetails } from 'src/model/placedetails.model';
@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.less']
})
export class PlaceDetailsComponent implements OnInit {
  place:string;
  places:IPlaceDetails;
  constructor(private activatedRoute:ActivatedRoute, private placesService:PlacesServiceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.place = params.get('place');
      this.placesService.getPlacedetails(this.place).subscribe(
        data=> this.places = data
      );
    });
  }

}
