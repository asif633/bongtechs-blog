import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAncientHistoryComponent } from './manage-ancient-history.component';

describe('ManageAncientHistoryComponent', () => {
  let component: ManageAncientHistoryComponent;
  let fixture: ComponentFixture<ManageAncientHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAncientHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAncientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
