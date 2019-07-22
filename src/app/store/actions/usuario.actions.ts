import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCES = '[Usuario] Cargar usuario SUCCES';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;
    constructor(public id: string){}
}
export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;
    constructor(public payload: any) { }
}
export class CargarUsuarioSucces implements Action {
    readonly type = CARGAR_USUARIO_SUCCES;
    constructor(public usuario: Usuario) { }
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioFail | CargarUsuarioSucces;
