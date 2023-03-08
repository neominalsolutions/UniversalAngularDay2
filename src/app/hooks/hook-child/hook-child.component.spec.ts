import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookChildComponent } from './hook-child.component';

describe('HookChildComponent', () => {
  let component: HookChildComponent;
  let fixture: ComponentFixture<HookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
