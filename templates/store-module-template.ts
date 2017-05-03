import * as angular from 'angular';

export const <%=camelName%>Module = angular.module(
    '<%=appPrefix%>....<%=camelName%>',
    [
        <%=dependencies%>
    ]
);

<%=camelName%>Module.service(<%=camelNameFirstUpper%>Store.name, <%=camelNameFirstUpper%>Store);
