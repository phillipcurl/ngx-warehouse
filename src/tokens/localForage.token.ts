import { OpaqueToken } from '@angular/core';

export function LocalForageToken(): OpaqueToken {
    return new OpaqueToken('localforage');
}