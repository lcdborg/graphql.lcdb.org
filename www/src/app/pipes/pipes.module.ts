import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPerformanceDatePipe } from './format-performance-date/format-performance-date.pipe';
import { CeilPipe } from './ceil.pipe';

@NgModule({
  declarations: [
    FormatPerformanceDatePipe,
    CeilPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatPerformanceDatePipe,
    CeilPipe
  ]
})
export class PipesModule { }
