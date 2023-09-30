import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ax-b',
  templateUrl: './multiplicacion-ax-b.component.html',
  styleUrls: ['./multiplicacion-ax-b.component.css']
})
export class MultiplicacionAxBComponent {

  num1:string='';
  num2:string='';
  resultado:number=0;
  valor:string='';
  op:string='';

  operacion(){
    
    for (let index=0; index < parseInt(this.num2) ; index++) {
      this.resultado += parseInt(this.num1);
      this.valor +=(this.num1 + '+')
    }

    this.resultado=parseInt(this.num1)*parseInt(this.num2);

    this.op =(this.valor + ' = ' + this.resultado);

  }
}
