import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body{
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {
  @Input('obj') funcionario: any;

  // getClassesCss() {
  //   return ['badge', 'badge-primary'];

  // }

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  getEstilosCartao(){
    return {
      borderWidth: this.funcionario.id + 'px',
        backgroundColor: this.funcionario.id % 2 === 0 ? 'lightyellow' : 'lightblue'
      };
  }

}
