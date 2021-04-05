import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDtoModel } from 'src/app/models/carDtoModel';
import { CarService } from 'src/app/services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  myInterval: boolean = false;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;

  cars:Car[]=[];
  carsDto:CarDtoModel[]=[];
  filterText="";
  selectedBrand:number;
  selectedColor:number;
  filterForm:FormGroup;
  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute,
              private formBuilder:FormBuilder) {   }

  ngOnInit(): void {
    this.createdForm();
    this.activatedRoute.params.subscribe((params)=>{

      if (params["colorId"])
      {
        this.getCarByColor(params["colorId"])
      }
      else if (params["brandId"]) {
        this.getCarByBrand(params["brandId"]);
      } else {
        
        this.getCarDto();
      }
    })

  }
  createdForm(){
    this.filterForm=this.formBuilder.group({
      brandSelect:["",Validators.required]
    });
  }

  getCars(){
    
    this.carService.getCars().subscribe((response)=>
    {
      this.cars=response.data;
      
    });
  }

  getCarDto(){
    this.carService.getCarDTO().subscribe((response)=>
    {
      this.carsDto=response.data  
    })
  }

  getCarByColor(colorId:number){
    this.carService.getCarByColor(colorId).subscribe((response)=>
    {
      this.carsDto=response.data;
      // this.dataLoaded=true;
    });
  }

  getCarByBrand(brandId:number){
    this.carService.getCarByColor(brandId).subscribe((response)=>
    {
      this.carsDto=response.data;
      // this.dataLoaded=true;
    });
  }

  changeBrand(brandId: number){
    this.selectedBrand=brandId;
  }

  changeColor(colorId: number){
    this.selectedColor=colorId;
  }

  filterByBrandId(){
    
   
    this.getCarByBrand(this.selectedBrand);    

    
  }

  filterByColorId(){
     this.getCarByColor(this.selectedColor);
  }

}
