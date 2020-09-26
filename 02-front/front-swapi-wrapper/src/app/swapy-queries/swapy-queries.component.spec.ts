import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapyQueriesComponent } from './swapy-queries.component';

describe('SwapyQueriesComponent', () => {
  let component: SwapyQueriesComponent;
  let fixture: ComponentFixture<SwapyQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapyQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapyQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
