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
import { StaffGuard } from './shared/services/staff.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminGuard } from './shared/services/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, StaffGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
