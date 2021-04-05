import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDtoModel } from '../models/carDtoModel';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDtoModel[], filterText: string): CarDtoModel[] {
            
    filterText=filterText?filterText.toLocaleLowerCase():"";
    var result= filterText?value.filter((c:CarDtoModel)=>
    c.name.toLocaleLowerCase().indexOf(filterText) !==-1 ||
    c.description.toLocaleLowerCase().indexOf(filterText) !==-1 ||
    c.colorName.toLocaleLowerCase().indexOf(filterText) !==-1 ||
    c.brandName?.toLocaleLowerCase().indexOf(filterText)!==-1 ||
    c.modelYear.toString().indexOf(filterText)!==-1 
    ):value;
    return result;
  }

}
