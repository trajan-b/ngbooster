/**
 * Created by Trajan on 30/04/2017.
 */

export type StoreRequest = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

export const DELETE: StoreRequest = 'DELETE';
export const GET: StoreRequest = 'GET';
export const PATCH: StoreRequest = 'PATCH';
export const POST: StoreRequest = 'POST';
export const PUT: StoreRequest = 'PUT';

export const ALL_STORE_REQUESTS: StoreRequest[] = [DELETE, GET, PATCH, POST, PUT];

export interface IStore {
    name: string;
    actionList?: IStoreAction[];
}

export interface IStoreAction {
    name: StoreRequest;
    route: string;
    wayToHttpCall: string;
}

