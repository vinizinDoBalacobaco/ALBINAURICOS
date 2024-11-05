import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Verifique se está aqui
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { HeaderComponent } from './header/header.component'; // Importe o cabeçalho

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    HeaderComponent // Adicione o cabeçalho aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // O módulo de roteamento deve estar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }