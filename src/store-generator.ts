/**
 * Created by Trajan on 30/04/2017.
 */

export type StoreRequest = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

export const DELETE: string = 'DELETE';
export const GET: string = 'GET';
export const PATCH: string = 'PATCH';
export const POST: string = 'POST';
export const PUT: string = 'PUT';

export interface IStore {
    name: string;
    canDelete?: boolean;
    canGet?: boolean;
    canPatch?: boolean;
    canPut?: boolean;
}

export interface IStoreAction {
    name: StoreRequest;
    url: string;
    wayToHttpCall: string;
}

