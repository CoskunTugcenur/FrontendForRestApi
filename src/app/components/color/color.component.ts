import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colorForm:FormGroup;
  colors:Color[];
  currentColor:Color;
  @Input() listType: string;
  @Output() colorChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private colorService:ColorService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.createdForm();
      this.getColors();
  }

  createdForm(){
    this.colorForm=this.formBuilder.group({
      selectColor:["",Validators.required]
    });
  }

  onChange(){
    if(this.colorForm.valid){
      let colorId = Object.assign(this.colorForm.value);
    
      this.colorChanged.emit(colorId.selectColor);
    }
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;  
    })  
  }


  setCurrentColor(color:Color){
    this.currentColor=color;
    console.log(color);
  }
  
}
