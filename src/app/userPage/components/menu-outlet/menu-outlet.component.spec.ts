import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOutletComponent } from './menu-outlet.component';

describe('MenuOutletComponent', () => {
  let component: MenuOutletComponent;
  let fixture: ComponentFixture<MenuOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
