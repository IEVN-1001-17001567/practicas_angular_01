import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
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
