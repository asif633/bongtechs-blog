import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientHistoryTableComponent } from './ancient-history-table.component';

describe('AncientHistoryTableComponent', () => {
  let component: AncientHistoryTableComponent;
  let fixture: ComponentFixture<AncientHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncientHistoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncientHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
