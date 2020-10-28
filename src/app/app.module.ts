import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TelefoniaComponent } from './components/telefonia/telefonia.component';
import { LineablancaComponent } from './components/lineablanca/lineablanca.component';
import { CamarasComponent } from './components/camaras/camaras.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TelefoniaComponent,
    LineablancaComponent,
    CamarasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'home', component:HomeComponent},
      {path: 'telefonia', component:TelefoniaComponent},
      {path: 'camaras', component:CamarasComponent},
      {path: 'lineablanca', component:LineablancaComponent},
      {path: 'about', component:AboutComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }