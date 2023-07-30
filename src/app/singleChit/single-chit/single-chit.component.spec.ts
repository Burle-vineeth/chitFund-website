import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChitComponent } from './single-chit.component';

describe('SingleChitComponent', () => {
  let component: SingleChitComponent;
  let fixture: ComponentFixture<SingleChitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
