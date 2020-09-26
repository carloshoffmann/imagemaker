import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { SwapyQueriesComponent } from './swapy-queries/swapy-queries.component';
import { SwapiWrapperService } from './swapi-wrapper.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SwapyQueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SwapiWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
