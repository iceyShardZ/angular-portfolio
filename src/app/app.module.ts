import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeTextComponent } from './components/welcome-text/welcome-text.component';
import { GridVisualComponent } from './components/grid-visual/grid-visual.component';
import { MountainsComponent } from './components/mountains/mountains.component';
import { BlackParallelogramComponent } from './components/black-parallelogram/black-parallelogram.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { NavbarItemsComponent } from './components/navbar-items/navbar-items.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeTextComponent,
    GridVisualComponent,
    MountainsComponent,
    BlackParallelogramComponent,
    MenuButtonComponent,
    NavbarItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
