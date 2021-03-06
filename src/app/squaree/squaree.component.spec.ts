import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareeComponent } from './squaree.component';

describe('SquareeComponent', () => {
  let component: SquareeComponent;
  let fixture: ComponentFixture<SquareeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
