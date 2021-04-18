import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDtoModel } from 'src/app/models/carDtoModel';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:CarDtoModel;

  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{

      if (params["carId"])
      {
        this.getCar(params["carId"]);
      }
     
    })
    
  }

  getCar(carId:number){
    this.carService.getCarDTOByCarId(carId).subscribe((response)=>{
      this.car=response.data;
    })
  }

}
