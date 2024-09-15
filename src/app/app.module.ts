/**
 * @Author: Jean Mira
 * @Date:   2024-09-15 15:49:00
 * @Last Modified by:   Jean Mira
 * @Last Modified time: 2024-09-15 19:47:37
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
