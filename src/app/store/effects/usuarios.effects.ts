import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) { }

    @Effect()
    cargarUsuarios$ = this.actions$
        .pipe(
            ofType(usuariosActions.CARGAR_USUARIOS),
            // el switchmap cancela un observable y devuelve uno nuevo
            switchMap(() => {
                return this.usuariosService.getUsers()
                    .pipe(
                        map(users => new usuariosActions.CargarUsuariosSucces(users)),
                        catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
                    );
            })
        );
}
