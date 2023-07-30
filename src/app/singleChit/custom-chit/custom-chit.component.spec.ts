import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChitComponent } from './custom-chit.component';

describe('CustomChitComponent', () => {
  let component: CustomChitComponent;
  let fixture: ComponentFixture<CustomChitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
