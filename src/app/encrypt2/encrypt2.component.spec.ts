import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encrypt2Component } from './encrypt2.component';

describe('Encrypt2Component', () => {
  let component: Encrypt2Component;
  let fixture: ComponentFixture<Encrypt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encrypt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encrypt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
