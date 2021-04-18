import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/:colorId",component:CarComponent},
  {path:"cars/:brandId",component:CarComponent},
  {path:"carDetail/:carId",component:CarDetailComponent},
  {path:"addCar",component:CarAddComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
