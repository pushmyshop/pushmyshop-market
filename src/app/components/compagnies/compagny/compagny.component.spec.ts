import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnyComponent } from './compagny.component';

describe('CompagnyComponent', () => {
  let component: CompagnyComponent;
  let fixture: ComponentFixture<CompagnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompagnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
