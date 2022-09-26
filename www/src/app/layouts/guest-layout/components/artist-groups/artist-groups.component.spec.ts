import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistGroupsComponent } from './artist-groups.component';

describe('ArtistGroupsComponent', () => {
  let component: ArtistGroupsComponent;
  let fixture: ComponentFixture<ArtistGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
