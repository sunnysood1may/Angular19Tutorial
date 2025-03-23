import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      alert('Access Denied! Please log in first.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
