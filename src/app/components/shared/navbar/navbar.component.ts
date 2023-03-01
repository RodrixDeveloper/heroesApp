import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  buscarHeroe(termino: string) {
    this.router.navigate(['/buscar', termino]);
  }
}
