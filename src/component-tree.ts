
import {GET, IStore, POST} from './store-generator';

export interface IComponent {
    children?: IComponent[];
    dependsOnModules?: string[];
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
        }],
        dependsOnModules: [
            'connectionPreviewModule.name'
        ]
    }],
    dependsOnModules: [
        'connectionListModule.name'
    ],
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
