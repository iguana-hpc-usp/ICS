import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNodesComponent } from './active-nodes.component';

describe('ActiveNodesComponent', () => {
  let component: ActiveNodesComponent;
  let fixture: ComponentFixture<ActiveNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
