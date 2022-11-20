import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {
  hovering: boolean = false;
  glowSquare: number = 0;
  @Output() clicked: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.clicked = !this.clicked;
  }

  blueSquares(): void{
  this.hovering = true;
  this.glowSquare = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  setTimeout(() => {
    if(this.hovering){
    this.blueSquares();
    }
  }, 120);
  }
  pauseBlueSquares(): void {
    this.glowSquare = 0;
    this.hovering = false;
  }

}
