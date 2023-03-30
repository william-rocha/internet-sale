import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PagesValidatorService } from './sales/services/pages-validator/pages-validator.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-grid-list cols="1" >
    <mat-horizontal-stepper (selectionChange)="selectionChanged($event)" [linear]="true" class="nav-header">
      <mat-step *ngFor="let step of steps; let i = index" [label]="step.title" [stepControl]="step.formGroup" [editable]="isEditable">
          <router-outlet *ngIf="i === selectedStepIndex"></router-outlet>
      </mat-step>
    </mat-horizontal-stepper>
</mat-grid-list>
  `,
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private pagesValidatorService: PagesValidatorService) {}

  ngOnInit() {
    this.pagesValidatorService.cepObservable().subscribe(findCep => {
      if (findCep) {
        this.selectionChanged({selectedIndex: 1});
      }
    });
    this.pagesValidatorService.planObservable().subscribe(choosePlan => {
      if (choosePlan) {
        this.selectionChanged({selectedIndex: 2});
      }
    });
    this.pagesValidatorService.useObservable().subscribe(registeredUser => {
      if (registeredUser) {
        this.selectionChanged({selectedIndex: 3});
      }
    });
  }
  public selectedStepIndex: number = 0;
  public loadingStep: boolean = false;

  cepCanNexPage  = this.fb.group({
    firstCtrl: [this.pagesValidatorService.getCep(), Validators.required],
  });
  planCanNextPage = this.fb.group({
    secondCtrl: [this.pagesValidatorService.getPlan(), Validators.required],
  });
  userCanNextPage = this.fb.group({
    thirdCtrl: [this.pagesValidatorService.getCep(), Validators.required],
  });
  isEditable = true;

  public steps = [
    { title: 'Verificar Cobertura CEP', path: 'verificar-cobertura-cep' , formGroup: this.cepCanNexPage },
    { title: 'Selecionar Plano', path: 'selecionar-plano', formGroup: this.planCanNextPage },
    { title: 'Cadastro de Usuário', path: 'cadastro-usuario' , formGroup: this.userCanNextPage },
  ];

  async selectionChanged({selectedIndex} : any) {
    await this.navigate(selectedIndex);
    this.selectedStepIndex = selectedIndex;
  }

  async navigate(selectedStepIndex: number): Promise<boolean> {
    const url = '/vendas/' + this.steps[selectedStepIndex].path;
    return this.router.navigate([url]);
  }
}
