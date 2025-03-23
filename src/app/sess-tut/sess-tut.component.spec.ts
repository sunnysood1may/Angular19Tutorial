import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessTutComponent } from './sess-tut.component';

describe('SessTutComponent', () => {
  let component: SessTutComponent;
  let fixture: ComponentFixture<SessTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessTutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
