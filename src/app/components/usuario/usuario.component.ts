import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import {Iusuario} from "../../Models/IUsuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios:any = [];
  estado:boolean = false;
  miUsuario = <Iusuario>{};

  constructor(private usuarioSerices: UsuarioService ) { 

  }

  ngOnInit(): void {
  }

  ObtenerUsuarios(){
    this.usuarioSerices.getUsuarios().subscribe( resp =>{
      console.log(resp);
      this.usuarios = resp;
    })
  }

  crearUsuario(){
    
    this.usuarioSerices.crearUsuarioServices(this.miUsuario)
      .subscribe(resp => {
          this.ObtenerUsuarios();
      });
    
    this.limpiarUsuario();
    this.ObtenerUsuarios();
  }

  btnBuscar(){
    this.ObtenerUsuarios();
  }

  editarUsuario(){
    let usuario = this.usuarios.find((elem:any) => elem.usuId == this.miUsuario.usuId);
    console.log(usuario, "desde eeeee");

    this.usuarioSerices.editarUsuarioServices(this.miUsuario.usuId, this.miUsuario)
      .subscribe(resp => {
          this.ObtenerUsuarios();
          this.limpiarUsuario();
      });

    
  }

  eliminarUsuario(index:number){
    
    let usuario = this.usuarios[index];

    if(confirm("¿DESEAS BORRAR ESTE ARTISTA?")){

        this.usuarioSerices.eliminarUsuarioServices(usuario.usuId)
        .subscribe(resp => {
          console.log("Eliminado");
          this.ObtenerUsuarios();

        });
    }
    
  }

  limpiarUsuario(){
    this.miUsuario = <Iusuario>{};
  }

  cargarUsuario(usuario: Iusuario){
   
    this.miUsuario = usuario;
  }



}
