import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpementationComponent } from './impementation.component';

describe('ImpementationComponent', () => {
  let component: ImpementationComponent;
  let fixture: ComponentFixture<ImpementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpementationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
