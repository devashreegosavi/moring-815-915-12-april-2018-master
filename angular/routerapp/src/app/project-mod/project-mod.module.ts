import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjModComponent } from './proj-mod.component';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { HeaderItemComponent } from './dash-header/header-item/header-item.component';
import { AnalytcsComponent } from './analytcs/analytcs.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    Ng2TableModule
  ],
  declarations: [
    ProjModComponent,
    DashNavComponent,
    SideBarComponent,
    DashHeaderComponent,
    HeaderItemComponent,
    AnalytcsComponent
  ]
})
export class ProjectModModule { }
