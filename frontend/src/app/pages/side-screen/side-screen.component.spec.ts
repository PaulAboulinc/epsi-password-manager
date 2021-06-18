import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideScreenComponent } from './side-screen.component';

describe('SideScreenComponent', () => {
  let component: SideScreenComponent;
  let fixture: ComponentFixture<SideScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
