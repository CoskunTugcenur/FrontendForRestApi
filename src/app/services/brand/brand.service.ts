import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { DataResponseModel } from 'src/app/models/DataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44331/api/brands";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<DataResponseModel<Brand[]>>{
    return this.httpClient.get<DataResponseModel<Brand[]>>(this.apiUrl+"/getall");
  }
}
