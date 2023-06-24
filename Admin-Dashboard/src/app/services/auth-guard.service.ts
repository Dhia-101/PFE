import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LocalData } from '@akveo/ng2-completer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private router: Router,
    private Auth: AuthService
  ) { }

  canActivate() {
    if (localStorage.getItem('token'))
      return true;
    else
      this.router.navigate(['/auth']);
    // set login first error message 
  }
}
