import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRouteComponentComponent } from './invalid-route-component.component';

describe('InvalidRouteComponentComponent', () => {
  let component: InvalidRouteComponentComponent;
  let fixture: ComponentFixture<InvalidRouteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidRouteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
