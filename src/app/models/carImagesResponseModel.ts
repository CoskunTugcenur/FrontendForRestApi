import { CarImage } from "./carImage";
import { ResponseModel } from "./responseModel";

export interface CarImagesResponseModel extends ResponseModel
{
    data:CarImage[];
}