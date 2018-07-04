import { PipesModule } from './pipes/pipes.module';
import { HttpObservablesModule } from './http-observables/http-observables.module';
import { MyFormsModule } from './forms/forms.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FpModule } from './fp/fp.module';
import { ProjectModModule } from './project-mod/project-mod.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LoginModule,
    AdminModule,
    FpModule,
    ProjectModModule,
    MyFormsModule,
    HttpObservablesModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
