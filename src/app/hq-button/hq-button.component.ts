import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hq-button',
  templateUrl: './hq-button.component.html',
  styleUrls: ['./hq-button.component.css']
})
export class HqButtonComponent implements OnInit {

  Texto: string;
  Href: string;
  Apelido: string;

  constructor() { }

  ngOnInit(): void {
  }

}
