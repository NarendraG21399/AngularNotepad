import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVerifyDialoComponent } from './password-verify-dialo.component';

describe('PasswordVerifyDialoComponent', () => {
  let component: PasswordVerifyDialoComponent;
  let fixture: ComponentFixture<PasswordVerifyDialoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordVerifyDialoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordVerifyDialoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
