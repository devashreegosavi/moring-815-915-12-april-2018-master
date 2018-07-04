import { AdminGuard ,} from './admin.guard';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile.component';
import { PaymentComponent } from './payment.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers:[AdminGuard],
  declarations: [AdminComponent, ProfileComponent, PaymentComponent]
})
export class AdminModule { }
