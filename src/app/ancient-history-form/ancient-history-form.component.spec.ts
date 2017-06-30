import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientHistoryFormComponent } from './ancient-history-form.component';

describe('AncientHistoryFormComponent', () => {
  let component: AncientHistoryFormComponent;
  let fixture: ComponentFixture<AncientHistoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncientHistoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncientHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
