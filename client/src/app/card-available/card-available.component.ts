import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Bikes } from '../app.component';

@Component({
  selector: 'app-card-available',
  templateUrl: './card-available.component.html',
  styleUrls: ['./card-available.component.scss']
})
export class CardAvailableComponent implements OnInit {

  @Input() bike:Bikes
  @Output() onRent = new EventEmitter()
  @Output() onDelete = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  addRent(){
    this.onRent.emit(this.bike._id)
  }

  deleteBike(){
    this.onDelete.emit(this.bike._id)
  }
}
