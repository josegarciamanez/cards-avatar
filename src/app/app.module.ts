// ─── MODULOS ────────────────────────────────────────────────────────────────────
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DbzModule } from './dbz/dbz.module';

// ─── COMPONENTES ────────────────────────────────────────────────────────────────
import { AppComponent } from './app.component';

// ─── SERVICIOS ──────────────────────────────────────────────────────────────────
import { DemoService } from './services/demo.service';
import { CardsComponent } from './components/cards/cards.component';
@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [BrowserModule, AppRoutingModule, DbzModule],
  providers: [DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
