import { style } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-searchbar',
  templateUrl: './dynamic-searchbar.component.html',
  styleUrls: ['./dynamic-searchbar.component.scss'],
})
export class DynamicSearchbarComponent {
 dynamicValues=["Home Loan","Agri Loan","Vehicle Loan","Personal Loan"]
animationValues:string=''
i:number=0
  constructor() {
    setInterval(()=>{
    this.i++
    this.animationValues=this.dynamicValues[this.i-1]
  if(this.i>this.dynamicValues.length){
    this.i=0
  }
  },2000)
   }

}
