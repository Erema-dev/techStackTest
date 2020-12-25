import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bikes } from '../app.component';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  form!: FormGroup;

  @Output() onAdd = new EventEmitter()

  ngOnInit(): void {
    this.form=new FormGroup({
      name:  new FormControl('',
      Validators.required),

      type : new FormControl('',
      Validators.required),

      price : new FormControl('',
      Validators.required)
  })
}

submit(){
  if (this.form.valid){
    const Bike : Bikes = {
      name: this.form.get('name').value,
      type: this.form.get('type').value,
      price: this.form.get('price').value,
      rent: false
    }
    this.onAdd.emit(Bike)
    this.form.reset()
  }
}


}
