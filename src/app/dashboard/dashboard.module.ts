import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [SettingsComponent, MenuComponent, HeaderComponent, FooterComponent, MainComponent],
  exports:[HeaderComponent,MenuComponent,FooterComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
