import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[];
  @Input() listType: string;
  @Output() brandChanged: EventEmitter<number> =   new EventEmitter();
  brandForm:FormGroup;
  constructor(private brandService:BrandService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getBrands();

    
  }

  createForm(){
    this.brandForm=this.formBuilder.group({
      selectBrand:["",Validators.required]
    });
  }

  onChange(){
    if(this.brandForm.valid){
      let brandId = Object.assign(this.brandForm.value);
     
      this.brandChanged.emit(brandId.selectBrand);
     
    }
    
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
    })

  }

  
  

}
