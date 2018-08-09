import { Component } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { RouterModule,Routes, Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ Http,HttpModule,Response } from '@angular/http';
import { ProductComponent } from './menu/product/product.component';
import { TerminalComponent } from './menu/terminal/terminal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
