import * as angular from 'angular';

export const connectionPreviewModule = angular.module(
    'ei....connectionPreview',
    [
        <%=dependsOnModules%>
    ]
);

connectionPreviewModule.component(ConnectionPreviewComponent.name, ConnectionPreviewComponent);
