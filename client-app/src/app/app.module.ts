import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './redux/reducers/index.reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { UnauthorizedComponent } from './shared/components/unauthorized/401.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
