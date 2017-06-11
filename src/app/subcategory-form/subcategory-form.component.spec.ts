import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryFormComponent } from './subcategory-form.component';

describe('SubcategoryFormComponent', () => {
  let component: SubcategoryFormComponent;
  let fixture: ComponentFixture<SubcategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
