import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDtoModel extends Car{

    brandName:string,
    colorName:string,
    carImages:CarImage[]
    
}