import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { RouterModule,Routes, Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ Http,HttpModule,Response } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './menu/admin/admin.component';
import { NotificationComponent } from './menu/notification/notification.component';
import { ProductComponent } from './menu/product/product.component';
import { TerminalComponent } from './menu/terminal/terminal.component';
import { CustomerComponent } from './menu/customer/customer.component';
import { CompanyComponent } from './menu/company/company.component';
import { DatanotificationComponent } from './menu/datanotification/datanotification.component';




//npm i rxjs-compat
const r:Routes=[
 
    {path:"",component:LoginComponent},
   
    {path:"menu",component:MenuComponent,pathMatch: 'prefix', children:[
      {path:"product", component:ProductComponent},
      {path:"terminal",component:TerminalComponent},
      {path:"customer", component:CustomerComponent},
      {path:"company", component:CompanyComponent},
      {path:"notification",component:NotificationComponent},
      {path:"datanotification",component:DatanotificationComponent},
  ]},
  
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdminComponent,
    NotificationComponent,
    ProductComponent,
    TerminalComponent,
    CustomerComponent,
    CompanyComponent,
    DatanotificationComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(r),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
