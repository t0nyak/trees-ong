import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDonateComponent } from './quick-donate.component';

describe('QuickDonateComponent', () => {
  let component: QuickDonateComponent;
  let fixture: ComponentFixture<QuickDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
