import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWarehouseModule, StorageConfig, STORAGE_TYPE } from '../src';
import { DEMO_COMPONENTS } from './components';
import { DemoComponent } from './demo.component';

const storageConfig: StorageConfig = {
  driver: STORAGE_TYPE.DEFAULT,
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
    NgxWarehouseModule.provideStorage(storageConfig)
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}