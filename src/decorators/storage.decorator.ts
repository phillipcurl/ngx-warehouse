function NgxWarehouse(key: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => key
    });
  };
}