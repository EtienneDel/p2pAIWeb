import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navBar.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  entryComponents: [NavBarComponent],
})
export class NavBarModule { }
