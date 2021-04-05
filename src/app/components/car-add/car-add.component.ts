import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  selectedFiles: FileList;
  addCarForm:FormGroup;
  myFiles:string [] = [];
  brands:Brand[];
  colors:Color[];
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,private colorService:ColorService,
    private carService:CarService) { }

  ngOnInit(): void {
    this.createAddCarForm();
    this.getColors();
    this.getBrands();
  }

  createAddCarForm(){
    this.addCarForm=this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      name:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      images:["",Validators.required]

    })
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
      
    })  
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
    })

  }

  // add(){
  //   if(this.productAddForm.valid){
  //     let productModel = Object.assign({},this.productAddForm.value)
  //     this.productService.add(productModel).subscribe(response=>{
  //       this.toastrService.success(response.message,"Başarılı")
  //     },responseError=>{
  //       if(responseError.error.Errors.length>0){
  //         for (let i = 0; i <responseError.error.Errors.length; i++) {
  //           this.toastrService.error(responseError.error.Errors[i].ErrorMessage
  //             ,"Doğrulama hatası")
  //         }       
  //       } 
  //     })
      
  //   }else{
  //     this.toastrService.error("Formunuz eksik","Dikkat")
  //   }
    
  // }

  addCar(){
    console.log("klajkdsa");
    if (this.addCarForm.valid){
      let carModel=Object.assign({},this.addCarForm.value);
      delete carModel.images;
      this.carService.add(carModel).subscribe((response)=>{
        console.log("eklendi");
      })
    }



  }

  onFileChange(event:any) {

    for (var i = 0; i < event.target.files.length; i++) { 
        this.myFiles.push(event.target.files[i]);
        console.log(event.target.files[i]);
    }
  }


  

}
