import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTestComponent } from './provider-test.component';

describe('ProviderTestComponent', () => {
  let component: ProviderTestComponent;
  let fixture: ComponentFixture<ProviderTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
