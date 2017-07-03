import * as angular from 'angular';
import 'angular-mock';

describe('ConnectionListComponent', () => {

    let _$compile: angular.ICompileService;
    let _$httpBackend: angular.IHttpBackendService;
    let _scope: angular.IRootScopeService;

    interface IConnectionListComponent extends angular.IController, ConnectionListComponent {

    }

    beforeEach(angular.mock.module(ConnectionList.name));

    beforeEach(inject((
        $compile: angular.ICompileService,
        $httpBackend: angular.IHttpBackendService,
        $rootScope: angular.IRootScopeService,
        connectionListStore: ConnectionListStore
    ) => {
        _$compile = $compile;
        _$httpBackend = $httpBackend;
        _scope = $rootScope.new() as IConnectionListComponent;
    }));

});
