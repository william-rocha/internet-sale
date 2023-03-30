import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CepCoverageService } from '../../services/cep-coverage/cep-coverage.service';

import { MatDialog } from '@angular/material/dialog';
import { Masks } from '../../utils/masks';

@Component({
  selector: 'app-cep-coverage',
  templateUrl: './cep-coverage.component.html',
  styleUrls: ['./cep-coverage.component.scss']
})
export class CepCoverageComponent {

  form!: FormGroup;
  cepMask = Masks.cepMask

  constructor(private fb: FormBuilder, private http: HttpClient, public dialog: MatDialog, private cepCoverageService: CepCoverageService) {}

  ngOnInit() {
    this.form = this.fb.group({
      cep: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.cepCoverageService.getByCep({ cep: this.form.value.cep.replace(/[.-]/g, '').toString()})
    }
  }

}
