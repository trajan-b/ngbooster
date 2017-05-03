import * as angular from 'angular';

describe('<%=camelNameFirstUpper%>Store', () => {

    let _$httpBackend: angular.IHttpBackendService;
    let _<%=camelName%>Store: <%=camelNameFirstUpper%>Store;

    beforeEach(inject((
        $httpBackend: angular.IHttpBackendService,
        <%=camelName%>Store: <%=camelNameFirstUpper%>Store
    ) => {
        _$httpBackend = $httpBackend;
        _<%=camelName%>Store = <%=camelName%>Store;
    }));

    afterEach(() => {
        _$httpBackend.verifyNoOutstandingExpectation();
        _$httpBackend.verifyNoOutstandingRequest();
    });
    <!--begin-GET
    it('should test HTTP GET call on /<%=camelName%> route', () => {

        _$httpBackend.expectGET('/<%=camelName%>').and.respond({});
        let result =_<%=camelName%>Store.get<%=camelNameFirstUpper%>();
        _$httpBackend.flush();

        expect(result).toEqual();

    });
    end-GET-->

});
