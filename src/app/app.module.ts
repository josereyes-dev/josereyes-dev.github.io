import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// inicio servicio script
import { CargarscriptsService } from './cargarscripts.service';
//fin servicio  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarscriptsService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
