import { Text } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { textChangeRangeIsUnchanged } from 'typescript';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':"*"
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  rickrollReady: boolean = false;
  ativarAnimacao: boolean = false;
  logo: string = '/assets/logo.png'
  rickroll: any;
  currentText: string;
  title = 'geronimo-angular';
  Apelido: string = "??";
  Contador: number = 0;
  Text: string[];
  geolocationPosition: any;
  Mensagem = {
    "apelido" : "",
    "message": "NADA DIGITADO =(",
  }


  constructor(private http: HttpClient,
              private _sanitizer: DomSanitizer) {
    this.rickroll = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1")
  }

  textChanged(): void {
    this.Text= [
      "nada aqui",
      "Olá!",
      "Eu sou o Gerônimo",
      `Você deve ser ... `,
      "Como quer que eu te chame?",
      `Ok, ${this.Apelido}. Você sabe que existe um projeto secreto.`,
      "Mas ainda não posso te contar nada sobre ele.",
      "Certamente ele existe e a chance de não existir é inexistente.",
      "E já que você veio aqui, eu tenho um livro de convidados.",
      "Você pode me deixar uma mensagem se quiser.",
      "Espero poder te passar mais informações em breve :)",
      "Sei que agora a casa está meio vazia",
      "E espero que a decepção não tenha sido muito grande",
      "Precisando de qualquer coisa, sempre estarei aqui",
      "Até logo!"
      ]
  }

  ngOnInit() {
    this.textChanged();
    this.currentText = this.Text[this.Contador]
  }

  nextText(): void {
    
    this.Contador += 1;
    this.currentText = this.Text[this.Contador];
  
  }

  setAndSendMessage(message:string): void{
    if (message != ""){
      this.Mensagem.message = message;
    }
    this.enviarEmail()
  }

  enviarEmailTeste(): void {
    console.log(this.Mensagem)
    console.log("email enviado!")
  }

  enviarEmail(): void {
    console.log(JSON.stringify(this.Mensagem))
    this.http.post<any>("http://localhost:5000/gotcha", this.Mensagem, httpOptions).subscribe(data => {
    })
    console.log("email enviado!")
  }

  onKey(event): void {
    this.Mensagem.apelido = event.target.value;
    this.Apelido = event.target.value;
    this.textChanged();
  }

  onKeyMessage(event): void {
    this.Mensagem.message = event.target.value;
    this.textChanged();
  }

  animar(): void {
    console.log('iniciando animação')
    this.ativarAnimacao = true
    setTimeout( () => {
      this.ativarAnimacao = false
      console.log('animação finalizada')
    }, 1000)
    this.Contador += 1;
    this.rickrollReady = true
  }
}
