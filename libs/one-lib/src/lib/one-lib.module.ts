import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedButtonComponent } from './red-button/red-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RedButtonComponent],
  exports: [RedButtonComponent]
})
export class OneLibModule {}
