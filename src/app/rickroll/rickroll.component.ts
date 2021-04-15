import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-rickroll',
  templateUrl: './rickroll.component.html',
  styleUrls: ['./rickroll.component.css']
})
export class RickrollComponent implements OnInit {

  safeSrc: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeSrc = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1")
   }

  ngOnInit(): void {
  }

}
