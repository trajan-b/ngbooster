import * as angular from 'angular';

export const connectionListModule = angular.module(
    'ei....connectionList',
    [
        <%=dependsOnModules%>
    ]
);

connectionListModule.component(ConnectionListComponent.name, ConnectionListComponent);
