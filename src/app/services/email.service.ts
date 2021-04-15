import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Email {
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private _http: HttpClient) { }

  api_url: string = "http://localhost:5000/gotcha"

  sendEmail(_subject: string, _message: string): void {
    const email: Email = {
      subject: _subject,
      message: _message
    }

    console.log(email)
    // this._http.post<Email>(this.api_url, email).subscribe( res => {
    //   console.log(res)
    // })

  }
}
