import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptygalleryComponent } from './emptygallery.component';

describe('EmptygalleryComponent', () => {
  let component: EmptygalleryComponent;
  let fixture: ComponentFixture<EmptygalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptygalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
