import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Iusuario } from '../Models/IUsuario';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://localhost:44331/api/Usuarios";
  
  constructor(private http: HttpClient) { 
  }
  getUsuarios(){

    let header = new HttpHeaders().set('Type-content','aplication/jason');

    return this.http.get(this.url,{headers: header});
  }

  crearUsuarioServices(usuario:Iusuario){
    let direccion = this.url;
    return this.http.post(direccion, usuario);
  }

  editarUsuarioServices(id:number, usuario:Iusuario ){
    let url = "https://localhost:44331/api/Usuarios/" + id;    

    return this.http.put(url,usuario);

  }

  eliminarUsuarioServices(id:number){
    let url = "https://localhost:44331/api/Usuarios/" + id;

    return this.http.delete(url);

  }
}
