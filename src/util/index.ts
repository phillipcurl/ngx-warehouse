// tslint:disable:typedef

export interface ExpiryData {
  expires?: Date|string;
  data: any;
}

// Convenience
export const encode = encodeURIComponent;
export const decode = decodeURIComponent;

export const COOKIE_SEP = '; ';
export const isAfterToday = (date: Date) => date > new Date();
export const isString = (str: string|Date): boolean => typeof str === 'string';
export const toString = (obj: any): string => typeof obj.toUTCString === 'function' ? obj.toUTCString() : obj.toString();
export const isNil = (item: any) => item === undefined || item === null;

export const setDataWithExpiry = (data, expires?: Date|string): ExpiryData => {
  return expires ? {data, expires: toString(expires)} : data;
};

export const isExpired = (data: ExpiryData): boolean => {
  if (!data.expires)
    return false;

  const {expires} = data;

  return isAfterToday(expires instanceof Date ? expires : new Date(expires));
};

export const getDataWithExpiry = (expData) => isExpired(expData) ? undefined : expData.data;

export const convertFromJSON = function(data: any) {
  if (typeof data !== 'string')
    return data;
  else {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }
};

export const isLocalStorageValid = () => {
  try {
    return typeof localStorage !== 'undefined' &&
           ('setItem' in localStorage) &&
           typeof localStorage.setItem === 'function';
  } catch (e) {
    return false;
  }
};

declare var window: any;

export const idb = () => {
  /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
  try {
    if (typeof window.indexedDB !== 'undefined') {
      return window.indexedDB;
    }
    if (typeof window.webkitIndexedDB !== 'undefined') {
      return window.webkitIndexedDB;
    }
    if (typeof window.mozIndexedDB !== 'undefined') {
      return window.mozIndexedDB;
    }
    if (typeof window.OIndexedDB !== 'undefined') {
      return window.OIndexedDB;
    }
    if (typeof window.msIndexedDB !== 'undefined') {
      return window.msIndexedDB;
    }
  } catch (e) {
    return;
  }
};

export const isIndexedDBValid = () => {
  try {
    // Initialize IndexedDB; fall back to vendor-prefixed versions
    // if needed.
    if (!idb()) {
      return false;
    }
    // We mimic PouchDB here; just UA test for Safari (which, as of
    // iOS 8/Yosemite, doesn't properly support IndexedDB).
    // IndexedDB support is broken and different from Blink's.
    // This is faster than the test case (and it's sync), so we just
    // do this. *SIGH*
    // http://bl.ocks.org/nolanlawson/raw/c83e9039edf2278047e9/
    //
    // We test for openDatabase because IE Mobile identifies itself
    // as Safari. Oh the lulz...
    if (typeof window.openDatabase !== 'undefined' && typeof navigator !== 'undefined' &&
      navigator.userAgent &&
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
      return false;
    }

    return idb &&
      typeof idb().open === 'function' &&
      // Some Samsung/HTC Android 4.0-4.3 devices
      // have older IndexedDB specs; if this isn't available
      // their IndexedDB is too old for us to use.
      // (Replaces the onupgradeneeded test.)
      typeof IDBKeyRange !== 'undefined';
  } catch (e) {
    return false;
  }
};

export const isWebSQLValid = () => {
  return typeof window.openDatabase === 'function';
};
