import * as angular from 'angular';

export const connectionModule = angular.module(
    'ei....connection',
    [
        <%=dependsOnModules%>
    ]
);

connectionModule.service(ConnectionStore.name, ConnectionStore);
