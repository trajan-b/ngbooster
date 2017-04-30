
export class <%=camelNameFirstUpper%>Store {

    let <%=camelName%>Promise: Promise<<%=camelNameFirstUpper%>>;

    constructor() {

    }
    public get<%=camelNameFirstUpper%>(): Promise<<%=camelNameFirstUpper%>> {

        if (this.<%=camelName%>Promise != null) {
            return this.<%=camelName%>Promise;
        }

        return <%=GET.wayToHttpCall%>
            .then(response => return <%=camelNameFirstUpper%>.deserialize());

    }

}
