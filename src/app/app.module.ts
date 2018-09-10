import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe} from '@angular/core';
import { AppComponent } from './app.component';
import { MultipleComponent} from './multiple/multiple.component';
import { MutiPipe } from './muti.pipe';
import { SquareeComponent } from './squaree/squaree.component';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultipleComponent,
    MutiPipe,
    SquareeComponent,
    SqrtPipe,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
