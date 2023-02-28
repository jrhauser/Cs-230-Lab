import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrytopsLayoutComponent } from './drytops-layout.component';

describe('DrytopsLayoutComponent', () => {
  let component: DrytopsLayoutComponent;
  let fixture: ComponentFixture<DrytopsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrytopsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrytopsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
