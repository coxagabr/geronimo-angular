import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geronimo',
  templateUrl: './geronimo.component.html',
  styleUrls: ['./geronimo.component.css']
})
export class GeronimoComponent implements OnInit {

  geronimoPath: string = '/assets/geronimo2.png'

  constructor() { }

  ngOnInit(): void {
  }

}
