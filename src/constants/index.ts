import { WarehouseConfig, DRIVER_TYPE } from './../models';

export const DEFAULT_CONFIG: WarehouseConfig = {
  driver: DRIVER_TYPE.DEFAULT,
  name: 'ngx-warehouse',
  version: 1.0,
  storeName: 'ngx_storage_keyval_pairs', // Should be alphanumeric, with underscores.
  description: 'The offline DB for ngx-warehouse'
};