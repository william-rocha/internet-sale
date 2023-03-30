import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PagesValidatorService } from '../pages-validator/pages-validator.service';
import { AlertsService } from '../alerts/alerts.service';
import { AlertMsgs } from '../../utils/alert-msgs';
import { Cep } from '../../models/sales';

@Injectable({
  providedIn: 'root'
})
export class CepCoverageService {

  constructor(private http: HttpClient, private pagesValidatorService: PagesValidatorService, private alertsService: AlertsService) { }


  getByCep({ cep }: any) {
    const apiUrl = `http://localhost:3000/coverage-by-cep/${cep}`;

    this.http.get(apiUrl).pipe(
      tap((response: any) => {
        this.pagesValidatorService.setCep(response);
        return response
      }),
      catchError((error) => {

        this.pagesValidatorService.setCep(null)

        this.alertsService.error(AlertMsgs.cepCoverage.error);
        return of(null);
      })
    ).subscribe();
  }
}
