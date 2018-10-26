import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ListComponent } from './to-do/list/list.component';
import { CreateComponent } from './to-do/create/create.component';
import { ToDoService } from './services/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
