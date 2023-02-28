import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrysuitsLayoutComponent } from './drysuits-layout.component';

describe('DrysuitsLayoutComponent', () => {
  let component: DrysuitsLayoutComponent;
  let fixture: ComponentFixture<DrysuitsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrysuitsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrysuitsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
