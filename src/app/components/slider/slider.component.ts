import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  mySrc ='./assets/images/1.jpg' ;
  i=1;
  timerID:any;

  next(){

    if(this.i!=5)
      this.i++;
    this.mySrc = `./assets/images/${this.i}.jpg`
    
  }

  prev(){

    if(this.i!=1)
      this.i--;
    this.mySrc = `./assets/images/${this.i}.jpg`
  }

  slide(){

    this.timerID =setInterval(() => {
      if(this.i > 5)
        this.i=1;
      this.mySrc = `./assets/images/${this.i}.jpg`
      this.i++;
    }, 1000);

  }

  stop(){

    clearInterval(this.timerID);
    // this.mySrc = `./assets/images/${this.i}.jpg`
  }

}
