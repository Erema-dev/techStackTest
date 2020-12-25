import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Bikes } from '../app.component';

@Component({
  selector: 'app-card-rent',
  templateUrl: './card-rent.component.html',
  styleUrls: ['./card-rent.component.scss']
})
export class CardRentComponent implements OnInit {


  @Input() bike:Bikes
  @Output() onCancel = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  cancelRent(){
    this.onCancel.emit(this.bike._id)
  }

}