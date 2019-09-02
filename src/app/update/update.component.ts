import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/services/mydata.service';
import { PlacesServiceService } from 'src/services/places-service.service';
import { FormGroup, FormBuilder, FormControl, NgFormSelectorWarning } from '@angular/forms';
import { IPlaceDetails } from 'src/model/placedetails.model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {
  name:string;
  addplace:FormGroup;
  place:IPlaceDetails;
  constructor(private myname:MydataService, private fb:FormBuilder, private placesService:PlacesServiceService) { }

  ngOnInit() {
    //this.myname.getname.subscribe(data =>this.name = data)
  this.addplace = this.fb.group({
    placeName : [''],
    placeImage : ['assets/mysore.jpg'],
    placeDetails : ['']
  });
  }

  onSubmit(): void {
    console.log(this.addplace.value);
    //this.mapPlaceValues();
    //this.placesService.addplaces(this.addplace.value).subscribe(
      //response => console.log("Success", response),
      //error => console.error("Error", error)
    //);
    this.addplace.reset();
  }

  mapPlaceValues(){
    this.place.placeName = this.addplace.value.placeName;
    this.place.placeImage = this.addplace.value.placeImage;
    this.place.placeDetails = this.addplace.value.placeDetails;
  }
  
}
