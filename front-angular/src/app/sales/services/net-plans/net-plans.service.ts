import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlertsService } from '../alerts/alerts.service';
import { InternetPlan } from '../../models/sales';
import { AlertMsgs } from '../../utils/alert-msgs';

import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetPlansService {

  internetPlans: InternetPlan[] = [];

  constructor(private http: HttpClient, private alertsService: AlertsService) { }

  getNetPlans(): any {
    const apiUrl = 'http://localhost:3000/internet-plans';

    this.http
      .get<InternetPlan[]>(apiUrl)
      .pipe(
        tap((response) => {
          if (response.length) {
            this.internetPlans = response;
            this.alertsService.success({...AlertMsgs.netPlans.success, title: `${response.length} ${AlertMsgs.netPlans.success.title}`});
          }
        }),
        catchError((error) => {

          this.alertsService.error(AlertMsgs.cepCoverage.error);
          return of([]);
        })
      ).subscribe();
  }
}
