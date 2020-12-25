import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bikes{
  _id?: string,
  name:string,
  type:string,
  price: number,
  rent: boolean
}

export interface Message{
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  [x: string]: any;
 

  constructor(private http: HttpClient){

  }
  
  bikes: Bikes[] = []
  rentBikes: Bikes[] = []
  availabelBikes: Bikes[] = []

  

  ngOnInit(){
    console.log('init')
     this.http.get<Bikes[]>('/api')
    .subscribe((res) => {
      console.log(res)
      this.bikes = res
      this.distribBikes()})  
  }

  distribBikes(){
    this.rentBikes = this.bikes.filter(bike => {
     return bike.rent == true
   })
 
    this.availabelBikes= this.bikes
   .filter(bike => {
     return bike.rent == false
   })

 }

  updateList(bike: Bikes){
    const newBike: Bikes = {
      name:bike.name,
      type: bike.type,
      price: +bike.price,
      rent: false
    } 
    this.http.post<Bikes>('/api/create', newBike)
    .subscribe (bike => {
      this.bikes.push(bike);
      this.distribBikes()})
    
  }

  cancelRent(id: string){
    this.http.put<Bikes>(`/api/update/${id}`,{
      rent: false
    }). subscribe((bike) => {
      this.bikes.find(t => t._id === bike._id).rent = false
      this.distribBikes()
    })  
    
  }

  rentBike(id: string){
    this.http.put<Bikes>(`/api/update/${id}`,{
      rent: true
    }). subscribe((bike) => {
      this.bikes.find(t => t._id === bike._id).rent = true
      this.distribBikes()
    })
  }

  removeBike(id:string){
    return this.http.delete<Message>(`/api/remove/${id}`)
    .subscribe(responce => {
      this.bikes = this.bikes.filter(bike => bike._id !== id)
      this.distribBikes()})
}
}
