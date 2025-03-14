import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTutorialComponent } from './pipe-tutorial.component';

describe('PipeTutorialComponent', () => {
  let component: PipeTutorialComponent;
  let fixture: ComponentFixture<PipeTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
