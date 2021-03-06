import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromUsuarioAction from '../../store/actions/usuario.actions';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioState } from 'src/app/store/reducers';
declare var rootWebAuth: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean;
  error: boolean;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    console.log('aca ta', rootWebAuth);
    this.router.params
      .subscribe(params => {
        const id = params['id'];
        this.store.dispatch(new fromUsuarioAction.CargarUsuario(id));
        this.store.select('usuario')
          .subscribe((usuario: UsuarioState) => {
            this.usuario = usuario.user;
            this.loading = usuario.loading;
            this.error = usuario.error;
          });
      });
  }

}
