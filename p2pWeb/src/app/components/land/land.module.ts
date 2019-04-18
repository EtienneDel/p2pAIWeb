import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandComponent } from './land.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LandComponent],
  exports: [LandComponent],
  entryComponents: [LandComponent],
})
export class LandModule { }
