import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarDtoResponseModel } from 'src/app/models/carDtoResponseModel';
import { CarImagesResponseModel } from 'src/app/models/carImagesResponseModel';
import { Car } from 'src/app/models/car';
import { ResponseModel } from 'src/app/models/responseModel';
import { CarImage } from 'src/app/models/carImage';

@Injectable({
  providedIn: 'root'
})


export class CarService {

  apiUrl="https://localhost:44331/api/";
  constructor(private httpClient:HttpClient) { }

  add(car:Car):Observable<ResponseModel>{
    console.log("car");
    console.log(car);
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car);
  }

  getCars(){
    return this.httpClient.get<CarResponseModel>(this.apiUrl+"carImages/getall");
  
  }

  getCarDTO(){
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl+"cars/GetCarDetails");
  }
  
  getCarByColor(colorId:number){
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl+"cars/getcardetailsbycolorId?colorId="+colorId);
  }
  
  getCarByBrand(brandId:number){
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl+"cars/getcardetailsbybrandId?brandId="+brandId);

  }
  // addCarImage(file: File):Observable<HttpEvent<any>>{
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/add",formData);
  // }

 
  
  
}