import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-movie',
  templateUrl: './galeria-movie.component.html',
  styleUrl: './galeria-movie.component.css'
})
export class GaleriaMovieComponent {
  currentIndex = 0;
  images = [
    'Escena1.jpg',
    'Escena2.jpg',
    'Escena3.jpg',
    'Escena4.jpg'
  ];

  intervalId: any; 

  ngOnInit() {
      this.iniciarDeslizamientoAutomatico();
  }
  
  ngOnDestroy() {
      clearInterval(this.intervalId); 
  }
  
  iniciarDeslizamientoAutomatico() {
      this.intervalId = setInterval(() => {
          this.next();
      }, 2000); 
  }
  
  next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  
  prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; 
  }
  

}
