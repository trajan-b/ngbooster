import * as angular from 'angular';

export const connectionListContainerModule = angular.module(
    'ei....connectionListContainer',
    [
        <%=dependsOnModules%>
    ]
);

connectionListContainerModule.component(ConnectionListContainerComponent.name, ConnectionListContainerComponent);
