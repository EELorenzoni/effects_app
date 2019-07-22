import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as fromUsuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) { }

    @Effect()
    cargarUsuario$ = this.actions$
        .pipe(
            ofType(fromUsuarioActions.CARGAR_USUARIO),
            // el switchmap cancela un observable y devuelve uno nuevo
            switchMap((action: fromUsuarioActions.CargarUsuario) => {
                return this.usuariosService.getUserById(action.id)
                    .pipe(
                        map(user => new fromUsuarioActions.CargarUsuarioSucces(user)),
                        catchError(error => of(new fromUsuarioActions.CargarUsuarioFail(error)))
                    );
            })
        );
}
