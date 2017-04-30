
export class <%=camelNameFirstUpper%>Store {

    let <%=camelName%>Promise: Promise<<%=camelNameFirstUpper%>>;

    public <%=camelName%>(): Promise<<%=camelNameFirstUpper%>> {

        if (this.<%=camelName%>Promise != null) {
            return this.<%=camelName%>Promise;
        }

        return (TODO - Http Call)
            .then(response %> return <%=camelNameFirstUpper%>.deserialize());

    }

}
