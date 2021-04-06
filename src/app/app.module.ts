import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatSortModule,
} from '@angular/material/sort';
import {
  MatInputModule,
} from '@angular/material/input';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  BrowserAnimationsModule,
  CdkTableModule,
  CdkTreeModule,
  MatTreeModule,
FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
