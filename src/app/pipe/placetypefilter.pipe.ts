import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placetypefilter'
})
export class PlacetypefilterPipe implements PipeTransform {

  transform(value: string, placeType: string): string {

    if(placeType == "religiousPilgrimage") {
      return value + ": This is one  ofthe famous place in India";
    }
    else if(placeType == "tourist") {
      return value + ": This is one of the torist place in India";
    }
    else {
      return value + ": Place type is not defined";
    }
    
  }

}
