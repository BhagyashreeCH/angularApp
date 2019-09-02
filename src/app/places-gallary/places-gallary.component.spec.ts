import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesGallaryComponent } from './places-gallary.component';

describe('PlacesGallaryComponent', () => {
  let component: PlacesGallaryComponent;
  let fixture: ComponentFixture<PlacesGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
