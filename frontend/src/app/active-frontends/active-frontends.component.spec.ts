import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFrontendsComponent } from './active-frontends.component';

describe('ActiveFrontendsComponent', () => {
  let component: ActiveFrontendsComponent;
  let fixture: ComponentFixture<ActiveFrontendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveFrontendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveFrontendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
