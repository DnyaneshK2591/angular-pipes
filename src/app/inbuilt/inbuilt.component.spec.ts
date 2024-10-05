import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltComponent } from './inbuilt.component';

describe('InbuiltComponent', () => {
  let component: InbuiltComponent;
  let fixture: ComponentFixture<InbuiltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InbuiltComponent],
    });
    fixture = TestBed.createComponent(InbuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
