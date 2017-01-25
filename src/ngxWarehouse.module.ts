import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as localforage from 'localforage';

import { WarehouseConfig, DRIVER_TYPE } from './models';
import { Warehouse } from './services';
import { LocalForageToken, WarehouseConfigToken } from './tokens';
import { DEFAULT_CONFIG } from './constants';
import { isNil } from './util';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: LocalForageToken,
      useFactory: localforageFactory
    },
    {
      provide: WarehouseConfigToken,
      useValue: DEFAULT_CONFIG
    },
    Warehouse
  ]
})
export class NgxWarehouseModule {

  static configureWarehouse(config: WarehouseConfig): ModuleWithProviders {
    return {
      ngModule: NgxWarehouseModule,
      providers: [
        {
          provide: WarehouseConfigToken,
          useValue: config
        }
      ]
    };
  }

}

export function localforageFactory(): any {
  return localforage;
}