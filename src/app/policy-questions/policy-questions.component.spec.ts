import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyQuestionsComponent } from './policy-questions.component';

describe('PolicyQuestionsComponent', () => {
  let component: PolicyQuestionsComponent;
  let fixture: ComponentFixture<PolicyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
