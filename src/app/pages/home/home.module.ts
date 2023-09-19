import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [SmallCardComponent, BigCardComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SmallCardComponent, BigCardComponent, HeaderComponent],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
