import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.css']
})
export class NavbarItemsComponent implements OnInit {
  @Input() visible!: boolean
  hoveringItemNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onItemHover(itemNumber: number){
    this.hoveringItemNumber = itemNumber;
  }
  onItemLeave(){
    this.hoveringItemNumber = 0
  }
}
