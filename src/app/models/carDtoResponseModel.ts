import { CarDtoModel } from "./carDtoModel";
import { ResponseModel } from "./responseModel";

export interface CarDtoResponseModel extends ResponseModel{
    data:CarDtoModel[];
}