import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { SecondInnerComponent } from './my-second/second-inner.component';
import { MyJumboComponent } from './my-jumbo/my-jumbo.component';
import { PartOneComponent } from './my-jumbo/part-one.component';
import { PartTwoComponent } from './my-jumbo/part-two.component';
import { DividerComponent } from './my-jumbo/divider.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IntrCompComFirstComponent } from './intr-comp-com-first/intr-comp-com-first.component';
import { BtnPnlComponent } from './intr-comp-com-first/btn-pnl.component';
import { ColPnlComponent } from './intr-comp-com-first/col-pnl.component';
import { LocalRefComponent } from './local-ref/local-ref.component';
import { NgbSampleComponent } from './ngb-sample/ngb-sample.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizeMakerDirective } from './directives/size-maker.directive';
import { CstStrDirective } from './directives/cst-str.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServicesComponent } from './services/services.component';
import { ServicesService } from './services/services.service';
import { DepndentComponent } from './services/depndent.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { NavbarComponent } from './directives/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    SecondInnerComponent,
    MyJumboComponent,
    PartOneComponent,
    PartTwoComponent,
    DividerComponent,
    DatabindingComponent,
    IntrCompComFirstComponent,
    BtnPnlComponent,
    ColPnlComponent,
    LocalRefComponent,
    NgbSampleComponent,
    DirectivesComponent,
    SizeMakerDirective,
    CstStrDirective,
    LifecycleComponent,
    ServicesComponent,
    DepndentComponent,
    DropdownDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ServicesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
