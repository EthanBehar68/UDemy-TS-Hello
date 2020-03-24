import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneThruWorkComponent } from './section-one-thru-work.component';

describe('SectionOneThruWorkComponent', () => {
  let component: SectionOneThruWorkComponent;
  let fixture: ComponentFixture<SectionOneThruWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneThruWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneThruWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
