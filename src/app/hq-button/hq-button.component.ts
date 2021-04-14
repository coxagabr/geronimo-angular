import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hq-button',
  templateUrl: './hq-button.component.html',
  styleUrls: ['./hq-button.component.css']
})
export class HqButtonComponent implements OnInit {

  @Input() Texto: string;
  Href: string;
  Apelido: string;

  constructor() { }

  ngOnInit(): void {
  }

}
