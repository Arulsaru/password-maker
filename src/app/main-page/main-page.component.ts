import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  // constructor(private elementRef: HTMLElement) { }
  generatePassword(): void {
    console.log("Arulmozhi");
  }
}