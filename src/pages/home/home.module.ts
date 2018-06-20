import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [IonicPageModule.forChild(HomePage), BrowserModule],
  entryComponents: [HomePage],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomeModule {}
