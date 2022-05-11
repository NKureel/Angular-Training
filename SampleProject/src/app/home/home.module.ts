import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/app.MainRoutes';
import { HomeComponent } from './home.component';
import { MasterComponent } from './master.component';


@NgModule({
  declarations: [   
    HomeComponent,
    MasterComponent 
  ],
  imports: [    
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
