import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveQueuesComponent } from './active-queues.component';

describe('ActiveNodesComponent', () => {
  let component: ActiveQueuesComponent;
  let fixture: ComponentFixture<ActiveQueuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveQueuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
