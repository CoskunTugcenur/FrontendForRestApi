import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { DataResponseModel } from 'src/app/models/DataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44331/api/colors";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<DataResponseModel<Color[]>>{
    return this.httpClient.get<DataResponseModel<Color[]>>(this.apiUrl+"/getall");
  }
}
