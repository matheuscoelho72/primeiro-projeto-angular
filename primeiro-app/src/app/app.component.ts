import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponentComponent } from './components/first-component/first-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            FirstComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Testes Angular';

  newTitle = '';

  setNewTitle(evento: Event) {
    this.newTitle = (<HTMLInputElement>evento.target).value;
  }

  changeTitle() {

    if (this.newTitle === '') {
      console.log('Titulo não pode ser vazio');
      return;
    } else if (this.newTitle === this.title) {
      console.log('Titulo não pode ser igual ao atual');
      return;
    } else {
      this.title = this.newTitle;
      console.log('Titulo alterado com sucesso');
    }

  }
  

}
