import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperheroesComponent } from './menu-superheroes.component';

describe('MenuSuperheroesComponent', () => {
  let component: MenuSuperheroesComponent;
  let fixture: ComponentFixture<MenuSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSuperheroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
