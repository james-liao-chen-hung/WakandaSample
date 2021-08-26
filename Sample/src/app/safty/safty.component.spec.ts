import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftyComponent } from './safty.component';

describe('SaftyComponent', () => {
  let component: SaftyComponent;
  let fixture: ComponentFixture<SaftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaftyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
