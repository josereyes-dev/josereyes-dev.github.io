import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptsService {

  constructor() { }

  carga(archivos:String[]){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = "./app/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
