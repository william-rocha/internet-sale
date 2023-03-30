import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepCoverageComponent } from './cep-coverage.component';

describe('CepCoverageComponent', () => {
  let component: CepCoverageComponent;
  let fixture: ComponentFixture<CepCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepCoverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
