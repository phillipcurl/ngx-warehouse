import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStorageModule, StorageConfig, STORAGE_TYPE } from '../src';
import { DemoComponent } from './demo.component';

const storageConfig: StorageConfig = new StorageConfig({
  driver: STORAGE_TYPE.INDEXEDDB,
  name: 'Demo',
  version: 1.0,
  storeName: 'keyvaluepairs',
  description: 'Demo description'
});

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    NgxStorageModule.forRoot(storageConfig)
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}