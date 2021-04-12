import { Text } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentText: string;
  title = 'geronimo-angular';
  Apelido: string = "Duda";
  Contador: number = 0;
  Text: string[];

  textChanged(): void {
    this.Text= [
      "Olá!",
      `Você deve ser a ${this.Apelido}`,
      "Eu sou o Gerônimo",
      "Como gosta de ser chamada?",
      `Ok, ${this.Apelido} será!`
      ]
  }

  ngOnInit() {
    this.textChanged();
    this.currentText = this.Text[this.Contador]
  }

  nextText(): void {
    this.Contador += 1;
    this.currentText = this.Text[this.Contador];
    console.log(this.Contador);
  }

  onKey(event): void {
    this.Apelido = event.target.value;
    this.textChanged();
  }
}
