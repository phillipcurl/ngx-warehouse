import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWarehouseModule, WarehouseConfig, DRIVER_TYPE } from '../src';
import { DEMO_COMPONENTS } from './components';
import { DemoComponent } from './demo.component';

const config: WarehouseConfig = {
  driver: DRIVER_TYPE.DEFAULT,
  name: 'Demo',
  version: 1.0,
  storeName: 'keyvaluepairs',
  description: 'Demo description'
};

@NgModule({
  declarations: [
    DemoComponent,
    ...DEMO_COMPONENTS
  ],
  imports: [
    BrowserModule,
    NgxWarehouseModule.configureWarehouse(config)
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}