import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }  from './app.routing';

import { AppComponent }  from './app.component';
import { PostComponent }  from './post/post.component';
import { AboutComponent }  from './about/about.component';
import { PostDetailComponent }  from './post/post-detail.component';
import { PostService }  from './post/post.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, FormsModule, ReactiveFormsModule, routing ],
  declarations: [ AppComponent, PostComponent, AboutComponent, PostDetailComponent ],
  providers: [ PostService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
