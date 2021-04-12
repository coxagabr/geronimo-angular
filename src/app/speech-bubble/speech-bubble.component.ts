import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.css']
})
export class SpeechBubbleComponent implements OnInit {

  @Input() Text: string = "";

  constructor() { }

  ngOnInit(): void {
  }



}
