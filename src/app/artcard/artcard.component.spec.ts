import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcardComponent } from './artcard.component';

describe('ArtcardComponent', () => {
  let component: ArtcardComponent;
  let fixture: ComponentFixture<ArtcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
