import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PruebaComponent],
  imports: [SharedModule, PruebaRoutingModule, ButtonModule],
})
export class HomeModule {}
