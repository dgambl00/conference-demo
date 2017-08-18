import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Third party modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdTabsModule, MdMenuModule } from '@angular/material';

//Custom Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
