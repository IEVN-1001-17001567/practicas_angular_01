import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre:string="";
  cantComp:number=0;  
  cantBole:number=0;
  boleta:number=12;
  mensaje:string="";
  perm:number=0;
  
  desc:string="";
  tarCin:string="No ";

  cuenta:number=0;

  calcular(){

    this.cuenta=0;

    this.perm=this.cantBole/this.cantComp;
    
    if(this.cantComp==0 || this.cantBole==0){

      this.mensaje="Faltan datos por ingresar"

    }
    else{
      if (this.perm<=7) {
        if(this.cantBole>5){
          this.desc="15";
        }
        else{
          if(this.cantBole>2){
            this.desc="10";
          }
        }
    
        switch(this.desc){
          case '15':
            this.cuenta=((this.boleta*this.cantBole)*.85);
            break;
          case '10':
            this.cuenta=((this.boleta*this.cantBole)*.9);
            break;
          case '':
            this.cuenta=(this.boleta*this.cantBole);
            break;
        }
    
        if (this.tarCin=="si") {
          this.cuenta=(this.cuenta*.9);
        }
        this.mensaje="Disfrute de su pelicula"  
      }
      else{
          this.mensaje=("No puedes comprar más de 7 boletos")
      }
    }
  }

  salir(){
    this.nombre="";
    this.cantComp=0;  
    this.cantBole=0;
    this.boleta=12;
    this.mensaje="";
    this.perm=0;
    
    this.desc="";
    this.tarCin="No ";

    this.cuenta=0;
  }
}
