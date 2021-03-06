import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UiModule } from '../../shared/ui.module';
import { HeaderModule } from '../../modules/header/header.module';
import { NavigationModule } from '../../modules/navigation/navigation.module';
import { EchartsExampleModule } from '../../modules/chart/chart.module';
import { MapModule } from '../../modules/map/map.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    UiModule,
    HomeRoutingModule,
    HeaderModule,
    NavigationModule,
    EchartsExampleModule,
    ComponentsModule,
    MapModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
