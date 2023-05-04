import { Component } from '@angular/core';
import { CargarscriptsService } from './cargarscripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'portafolio';

  constructor(private _CargarScripts:CargarscriptsService){
    _CargarScripts.carga(["scripts.js"]);
  }
}
