import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';

@NgModule({
  declarations: [SmallCardComponent, BigCardComponent],
  imports: [
    CommonModule
  ],
  exports: [SmallCardComponent, BigCardComponent],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
