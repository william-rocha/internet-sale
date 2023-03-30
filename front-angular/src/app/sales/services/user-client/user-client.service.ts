import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertMsgs } from '../../utils/alert-msgs';
import { AlertsService } from '../alerts/alerts.service';
import { PagesValidatorService } from '../pages-validator/pages-validator.service';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  constructor(private http: HttpClient, private pagesValidatorService: PagesValidatorService, private alertsService: AlertsService) { }

  saveUser(userBody: any) {
    const apiUrl = `http://localhost:3000/users}`;

    this.http.post(apiUrl, userBody).pipe(
      tap((response) => {
        this.pagesValidatorService.setUse(response)
        this.alertsService.error(AlertMsgs.userClient.success);
      }),
      catchError((error) => {
        this.pagesValidatorService.setUse(false)
        this.alertsService.error(AlertMsgs.userClient.error);
        return of(null);
      })
    ).subscribe();
  }

}
