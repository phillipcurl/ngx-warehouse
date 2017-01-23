import { Injectable, Inject, Optional } from '@angular/core';

import { IStorageConfig, STORAGE_TYPE } from './../models';
import { isNil } from './../util';

@Injectable()
export class StorageConfigService {
  constructor(
    @Optional() public config?: IStorageConfig
  ) {
    if (isNil(this.config)) {
      this.config = {
        driver      : STORAGE_TYPE.INDEXDB, // Force WebSQL; same as using setDriver()
        name        : 'ngx-storage',
        version     : 1.0,
        // size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
        storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
        description : 'some description'
      };
    }
  }
}