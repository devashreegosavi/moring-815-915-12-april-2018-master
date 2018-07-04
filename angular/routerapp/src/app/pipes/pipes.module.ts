import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PipesComponent, ReversePipe, FilterPipe]
})
export class PipesModule { }
