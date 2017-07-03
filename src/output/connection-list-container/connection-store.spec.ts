import * as angular from 'angular';

describe('ConnectionStore', () => {

    let _$httpBackend: angular.IHttpBackendService;
    let _connectionStore: ConnectionStore;

    beforeEach(inject((
        $httpBackend: angular.IHttpBackendService,
        connectionStore: ConnectionStore
    ) => {
        _$httpBackend = $httpBackend;
        _connectionStore = connectionStore;
    }));

    afterEach(() => {
        _$httpBackend.verifyNoOutstandingExpectation();
        _$httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should test HTTP GET call on /connection route', () => {

        _$httpBackend.expectGET('/connection').and.respond({});
        let result =_connectionStore.getConnection();
        _$httpBackend.flush();

        expect(result).toEqual();

    });
    
});
