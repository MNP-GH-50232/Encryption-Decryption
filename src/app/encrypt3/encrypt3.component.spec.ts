import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encrypt3Component } from './encrypt3.component';

describe('Encrypt3Component', () => {
  let component: Encrypt3Component;
  let fixture: ComponentFixture<Encrypt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encrypt3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encrypt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
