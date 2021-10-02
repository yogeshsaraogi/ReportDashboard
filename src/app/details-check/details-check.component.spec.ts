import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCheckComponent } from './details-check.component';

describe('DetailsCheckComponent', () => {
  let component: DetailsCheckComponent;
  let fixture: ComponentFixture<DetailsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
