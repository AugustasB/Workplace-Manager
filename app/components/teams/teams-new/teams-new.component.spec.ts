import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsNewComponent } from './teams-new.component';

describe('TeamsNewComponent', () => {
  let component: TeamsNewComponent;
  let fixture: ComponentFixture<TeamsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
