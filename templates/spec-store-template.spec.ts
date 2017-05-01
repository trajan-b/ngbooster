import * as angular from 'angular';

describe('<%=camelNameFirstUpper%>Store', () => {

    let _httpBackend: angular.IHttpBackendService;
    let _<%=camelName%>Store: <%=camelNameFirstUpper%>Store;

    beforeEach(inject((
        $httpBackend: angular.IHttpBackendService,
        <%=camelName%>Store: <%=camelNameFirstUpper%>Store
    ) => {
        _httpBackend = $httpBackend;
        _<%=camelName%>Store = <%=camelName%>Store;
    }));

    xit('should ...', () => {

    });

});
