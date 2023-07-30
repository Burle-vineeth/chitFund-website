import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleChitComponent } from './single-chit/single-chit.component';
import { CustomChitComponent } from './custom-chit/custom-chit.component';
import { routes } from './single-chit.routes';
import { MaterialModule } from '../signup/material.module';

@NgModule({
  declarations: [SingleChitComponent, CustomChitComponent],
  imports: [CommonModule, routes, MaterialModule],
})
export class SingleChitModule {}
