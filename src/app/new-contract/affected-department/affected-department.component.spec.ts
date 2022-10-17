import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedDepartmentComponent } from './affected-department.component';

describe('AffectedDepartmentComponent', () => {
  let component: AffectedDepartmentComponent;
  let fixture: ComponentFixture<AffectedDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectedDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
