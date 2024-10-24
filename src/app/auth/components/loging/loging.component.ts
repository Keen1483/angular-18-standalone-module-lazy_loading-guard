import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.scss'
})
export class LogingComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {
    this.authService.login();
    this.router.navigateByUrl('/facesnaps');
  }
}
