import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUsuariosService } from "../../services/api-usuarios.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correo = '';
  contrasenia = '';

  constructor(
    private apiUsuariosService: ApiUsuariosService,
    private router: Router
  ) {}

  autenticarCuenta(): void {
    const correo = this.correo;
    const contrasenia = this.contrasenia;
    this.apiUsuariosService.autenticarUsuario(correo, contrasenia).subscribe(
      (data) => {
        console.log('Autenticación exitosa:', data);
        this.router.navigate(['/listanime']);
      },
      (error) => {
        console.error('Error al autenticar:', error);
      }
    );
  }
}
