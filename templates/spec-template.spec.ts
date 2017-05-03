import * as angular from 'angular';
import 'angular-mock';

describe('<%=camelNameFirstUpper%>Component', () => {

    let _$compile: angular.ICompileService;
    let _$httpBackend: angular.IHttpBackendService;
    let _scope: angular.IRootScopeService;

    interface I<%=camelNameFirstUpper%>Component extends angular.IController, <%=camelNameFirstUpper%>Component {

    }

    beforeEach(angular.mock.module(<%=camelNameFirstUpper%>.name));

    beforeEach(inject((
        $compile: angular.ICompileService,
        $httpBackend: angular.IHttpBackendService,
        $rootScope: angular.IRootScopeService,
        <%=camelName%>Store: <%=camelNameFirstUpper%>Store
    ) => {
        _$compile = $compile;
        _$httpBackend = $httpBackend;
        _scope = $rootScope.new() as I<%=camelNameFirstUpper%>Component;
    }));

});
