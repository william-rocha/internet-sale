import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SalesRoutingModule } from './sales-routing.module';

import { CepCoverageComponent } from './pages/cep-coverage/cep-coverage.component';
import { InternetPlansComponent } from './pages/internet-plans/internet-plans.component';
import { FormsUsersComponent } from './pages/forms-users/forms-users.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { InputComponent } from './components/input/input.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { FormsModule } from '@angular/forms';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';
@NgModule({
  declarations: [
    CepCoverageComponent,
    InternetPlansComponent,
    FormsUsersComponent,
    InputComponent,
    AlertDialogComponent,
    ButtonCustomComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    TextMaskModule,
    FormsModule
  ]
})
export class SalesModule { }
