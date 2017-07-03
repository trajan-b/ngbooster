import * as angular from 'angular';
import 'angular-mock';

describe('ConnectionPreviewComponent', () => {

    let _$compile: angular.ICompileService;
    let _$httpBackend: angular.IHttpBackendService;
    let _scope: angular.IRootScopeService;

    interface IConnectionPreviewComponent extends angular.IController, ConnectionPreviewComponent {

    }

    beforeEach(angular.mock.module(ConnectionPreview.name));

    beforeEach(inject((
        $compile: angular.ICompileService,
        $httpBackend: angular.IHttpBackendService,
        $rootScope: angular.IRootScopeService,
        connectionPreviewStore: ConnectionPreviewStore
    ) => {
        _$compile = $compile;
        _$httpBackend = $httpBackend;
        _scope = $rootScope.new() as IConnectionPreviewComponent;
    }));

});
