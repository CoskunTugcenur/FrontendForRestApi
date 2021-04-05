import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDtoModel } from 'src/app/models/carDtoModel';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:CarDtoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
