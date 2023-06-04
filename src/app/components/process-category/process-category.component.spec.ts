import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCategoryComponent } from './process-category.component';

describe('ProcessCategoryComponent', () => {
  let component: ProcessCategoryComponent;
  let fixture: ComponentFixture<ProcessCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
