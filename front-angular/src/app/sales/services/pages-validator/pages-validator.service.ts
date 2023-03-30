import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cep } from '../../models/sales';

@Injectable({
  providedIn: 'root'
})
export class PagesValidatorService {

  cep: Cep = {
    rua: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
  }

  private cepSubject = new BehaviorSubject<Cep | null>(this.cep);
  private planSubject = new BehaviorSubject<any>(null);
  private useSubject = new BehaviorSubject<any>(null);

  constructor() { }

  setCep(value: Cep | null): void {
    this.cepSubject.next(value);
  }

  getCep(): any {
    return this.cepSubject.value;
  }

  cepObservable() {
    return this.cepSubject.asObservable();
  }

  setPlan(plan: any) {
    this.planSubject.next(plan);
  }

  getPlan(): any {
    return this.planSubject.value;
  }

  planObservable() {
    return this.planSubject.asObservable();
  }

  setUse(use: any) {
    this.useSubject.next(use);
  }

  getUse(): any {
    return this.useSubject.value;
  }

  useObservable() {
    return this.useSubject.asObservable();
  }
}
