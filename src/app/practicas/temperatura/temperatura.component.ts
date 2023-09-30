import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {

  conversion:string="";
  valorG:string='';
  resultado:number=0;
  mensaje:string="";
  
  convGrados():void{
    switch (this.conversion) {
      case 'centi':
        this.mensaje=(this.resultado=(parseInt(this.valorG)-32)*(5/9)) + "° C";
        break;
      
      case 'fahre':
        this.mensaje=(this.resultado=((parseInt(this.valorG)*(9/5))+32)) + "° F";
        break;

      default:
        break;
    }
  }
  
}
