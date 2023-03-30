import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertsService } from '../../services/alerts/alerts.service';
import { NetPlansService } from '../../services/net-plans/net-plans.service';
import { PagesValidatorService } from '../../services/pages-validator/pages-validator.service';

import { InternetPlan } from '../../models/sales';
import { AlertMsgs } from '../../utils/alert-msgs';

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrls: ['./internet-plans.component.scss'],
})
export class InternetPlansComponent implements OnInit{

  selectedOption = '';

  netPlans: InternetPlan[] = []

  constructor(private http: HttpClient, private netPlansService: NetPlansService, private pagesValidatorService: PagesValidatorService, private alertsService: AlertsService) {}

  ngOnInit() {
    this.getNetPlans();
  }

  getNetPlans() {
    this.netPlansService && this.netPlansService.getNetPlans().subscribe((response: InternetPlan[]) => {
      this.netPlans = response;
    });
  }

  submit(): void {
    if (this.selectedOption) {
      this.pagesValidatorService.setPlan(this.selectedOption)
      return
    }
    this.alertsService.warning(AlertMsgs.netPlans.warning)
  }
}
