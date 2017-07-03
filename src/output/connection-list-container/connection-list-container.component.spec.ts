import * as angular from 'angular';
import 'angular-mock';

describe('ConnectionListContainerComponent', () => {

    let _$compile: angular.ICompileService;
    let _$httpBackend: angular.IHttpBackendService;
    let _scope: angular.IRootScopeService;

    interface IConnectionListContainerComponent extends angular.IController, ConnectionListContainerComponent {

    }

    beforeEach(angular.mock.module(ConnectionListContainer.name));

    beforeEach(inject((
        $compile: angular.ICompileService,
        $httpBackend: angular.IHttpBackendService,
        $rootScope: angular.IRootScopeService,
        connectionListContainerStore: ConnectionListContainerStore
    ) => {
        _$compile = $compile;
        _$httpBackend = $httpBackend;
        _scope = $rootScope.new() as IConnectionListContainerComponent;
    }));

});
