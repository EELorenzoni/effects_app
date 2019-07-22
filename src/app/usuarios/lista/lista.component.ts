import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as usuariosActions from '../../store/actions';
import { UsuariosState } from '../../store/reducers/usuarios.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean;
  error: boolean;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('usuarios')
      .subscribe((usuarios: UsuariosState) => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      });
    this.store.dispatch(
      new usuariosActions.CargarUsuarios()
    );
  }

}
