import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetInputComponent } from './get-set-input.component';

describe('GetSetInputComponent', () => {
  let component: GetSetInputComponent;
  let fixture: ComponentFixture<GetSetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSetInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
