import { Component, OnInit } from '@angular/core';
import {AfterViewChecked, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {CollapseDirective} from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
