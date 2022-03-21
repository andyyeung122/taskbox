import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndyLibraryComponent } from './andy-library.component';

describe('AndyLibraryComponent', () => {
  let component: AndyLibraryComponent;
  let fixture: ComponentFixture<AndyLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndyLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
