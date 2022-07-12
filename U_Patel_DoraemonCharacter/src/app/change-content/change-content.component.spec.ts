import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeContentComponent } from './change-content.component';

describe('ChangeContentComponent', () => {
  let component: ChangeContentComponent;
  let fixture: ComponentFixture<ChangeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
