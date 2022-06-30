import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';

@NgModule({
  declarations: [PruebaComponent],
  imports: [SharedModule, PruebaRoutingModule],
})
export class HomeModule {}
