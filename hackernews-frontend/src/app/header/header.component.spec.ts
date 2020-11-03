import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Creation */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Snackbar should be called and work as intended */
  it('snackbar should open as intended when invoked', () => {
    spyOn(component.snackBar, 'open');
    component.openSnackBar({message: 'Test'} as any, "Ok");
    expect(component.snackBar.open).toHaveBeenCalledWith(Object({ message: 'Test' }),
    'Ok', Object({ duration: 2500, horizontalPosition: 'right', verticalPosition: 'bottom',
    panelClass: [ 'reg-login-snackbar' ] }));;
  });
});
