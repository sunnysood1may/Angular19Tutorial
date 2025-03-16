import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHooksComponent } from './life-hooks.component';

describe('LifeHooksComponent', () => {
  let component: LifeHooksComponent;
  let fixture: ComponentFixture<LifeHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
