import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryTableComponent } from './subcategory-table.component';

describe('SubcategoryTableComponent', () => {
  let component: SubcategoryTableComponent;
  let fixture: ComponentFixture<SubcategoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
