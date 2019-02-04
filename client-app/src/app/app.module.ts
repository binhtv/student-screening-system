import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './redux/reducers/index.reducer';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    AdminModule,
    StaffModule,
    StudentModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
