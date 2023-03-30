import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Alert {
  icon: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent {
  alert: Alert = {
    icon: '',
    title: '',
    subTitle: ''
}

  alerts: { [key: string]: Alert } = {};


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AlertDialogComponent>
  ) {
    this.alerts = {
      coverage_cep_error: {
        icon: '',
        title: 'Nenhuma cidade foi encontrada com esse CEP.',
        subTitle: '',
      },
    };
    console.log(data);
    if (data?.type && this.alerts[data.type]) {
      this.alert = this.alerts[data.type];
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

