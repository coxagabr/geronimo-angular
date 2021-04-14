import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ddd-button',
  templateUrl: './ddd-button.component.html',
  styleUrls: ['./ddd-button.component.css']
})
export class DddButtonComponent implements OnInit {

  @Input() Text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
