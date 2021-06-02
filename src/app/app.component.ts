import { Text } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { textChangeRangeIsUnchanged } from 'typescript';
import { ClientInfoService } from './services/client-info.service';

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
  Apelido: string = "Maria Eduarda";
  Contador: number = 0;
  Text: string[];
  UserData: any;
  geolocationPosition: any;
  Mensagem = {
    "apelido" : "",
    "message": "NADA DIGITADO =(",
  }


  constructor(private http: HttpClient,
              private _sanitizer: DomSanitizer,
              private _userInfo: ClientInfoService) {
    this.rickroll = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1")
  }

  textChanged(): void {
    this.Text= [
      "nada aqui",
      "Olá!",
      "Eu sou o Gerônimo",
      `Você deve ser a ${this.Apelido}`,
      "Como prefere ser chamada?",
      `Ok, ${this.Apelido}. Você sabe que existe um projeto secreto.`,
      "Mas ainda não posso te contar nada sobre ele.",
      "Certamente ele existe e a chance de não existir é inexistente.",
      "Por aqui você pode falar comigo",
      "É só digitar e na caixinha ai de baixo e enviar!",
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
    this._userInfo.getConfigResponse().subscribe( 
      data => {
        this.UserData = data
        console.log(this.UserData.body)
        this.http.post<any>("https://geronimoapi.herokuapp.com/newaccess", this.UserData.body, httpOptions).subscribe(data => {
    })

      },
      err => console.error(err),
      () => console.log("Done")
    )
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

  enviarEmail(): void {
    console.log(JSON.stringify(this.Mensagem))
    this.http.post<any>("https://geronimoapi.herokuapp.com/luvya", this.Mensagem, httpOptions).subscribe(data => {
    })
    console.log("mensagem enviada!")
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
