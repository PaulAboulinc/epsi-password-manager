import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDashboardComponent } from './password-dashboard.component';

describe('PasswordDashboardComponent', () => {
  let component: PasswordDashboardComponent;
  let fixture: ComponentFixture<PasswordDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
