import { Component } from '@angular/core';
import {Usuario} from "../../model/usuario.model";
import {ApiUsuariosService} from "../../services/api-usuarios.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-singup-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nuevoUsuario: Usuario = {
    nombre: '',
    correo: '',
    contrasenia: '',
  };

  constructor(
    private router: Router,
  private apiUsuariosService: ApiUsuariosService) {}

  onRegistrar(): void {
    this.apiUsuariosService.registerUsuario(this.nuevoUsuario).subscribe(
      (response) => {
        alert('USUARIO REGISTRADO');

        this.router.navigate(['/login-form']);
      },
      (error) => {

      }
    );
  }
}
