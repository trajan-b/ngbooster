
import {GET, IStore, POST} from './store-generator';

export interface IComponent {
    children?: IComponent[];
    inputList?: string[];
    name: string;
    outputList?: string[];
    retrievesDataFrom?: IStore[];
}

export const COMPONENT_TREE: IComponent[] = [{
    name: 'connection-list-container',
    children: [{
        name: 'connection-list',
        children: [{
            name: 'connection-preview',
            inputList: ['connection'],
            outputList: ['onAccountClick']
        }]
    }],
    retrievesDataFrom: [{
        name: 'connection',
        actionList: [
            {
                name: GET,
                route: '/connections',
                wayToHttpCall: 'this.restangularResources.connectionResources().one().get()'
            },
            {
                name: POST,
                route: '/connections',
                wayToHttpCall: 'this.restangularResources.connectionResources().delete()'
            }]
    }]
}];
