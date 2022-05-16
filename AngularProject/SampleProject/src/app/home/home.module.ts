import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/app.MainRoutes';
import { HomeComponent } from './home.component';
import { MasterComponent } from './master.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
