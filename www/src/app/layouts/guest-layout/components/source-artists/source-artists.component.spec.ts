import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceArtistsComponent } from './source-artists.component';

describe('SourceArtistsComponent', () => {
  let component: SourceArtistsComponent;
  let fixture: ComponentFixture<SourceArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
