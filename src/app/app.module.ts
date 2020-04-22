import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HalamaninputComponent } from './halamaninput/halamaninput.component';
import { HalamanlistComponent } from './halamanlist/halamanlist.component';
import { HalamaneditComponent } from './halamanedit/halamanedit.component';

const ROUTES: Routes =[
  {path:'halamaninput',component:HalamaninputComponent},
  {path:'halamanlist',component:HalamanlistComponent},
  {path:'halamanedit',component:HalamaneditComponent}
]

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent, HelloComponent, HalamaninputComponent, HalamanlistComponent, HalamaneditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
