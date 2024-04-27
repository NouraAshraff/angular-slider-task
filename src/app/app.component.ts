import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SliderComponent } from "./components/slider/slider.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet , 
    FirstComponent,
    SliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
