//* ────────────────────────────────────────────────────────────────
//!   :::::: M O D U L O S : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DbzModule } from './dbz/dbz.module';
import { FormsModule } from '@angular/forms';

//* ────────────────────────────────────────────────────────────────────
//!  :::::: C O M P O N E N T E S : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────────
import { AppComponent } from './app.component';

//* ────────────────────────────────────────────────────────────────────
//!   :::::: S E R V I C I O S : :  :   :    :     :        :          :
//* ────────────────────────────────────────────────────────────────────
import { DemoService } from './services/demo.service';
import { CardsComponent } from './components/cards/cards.component';
@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [BrowserModule, AppRoutingModule, DbzModule, FormsModule],
  providers: [DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
