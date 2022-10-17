import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractpartnerComponent } from './contractpartner.component';

describe('ContractpartnerComponent', () => {
  let component: ContractpartnerComponent;
  let fixture: ComponentFixture<ContractpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
