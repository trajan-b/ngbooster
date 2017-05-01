
export class <%=camelNameFirstUpper%>Store {

    let <%=camelName%>Promise: Promise<<%=camelNameFirstUpper%>>;

    constructor() {

    }
    <!--begin-GET
    public get<%=camelNameFirstUpper%>(): Promise<<%=camelNameFirstUpper%>> {

        if (this.<%=camelName%>Promise != null) {
            return this.<%=camelName%>Promise;
        }

        return <%=GET.wayToHttpCall%>
            .then(responseData => return <%=camelNameFirstUpper%>.deserialize(responseData));

    }
    end-GET-->
    <!--begin-PATCH
    public patch<%=camelNameFirstUpper%>(): Promise<<%=camelNameFirstUpper%>> {

        return <%=PATCH.wayToHttpCall%>
            .then(responseData => return <%=camelNameFirstUpper%>.deserialize(responseData));

    }
    end-PATCH-->
    <!--begin-PUT
    public put<%=camelNameFirstUpper%>(): Promise<<%=camelNameFirstUpper%>> {

        return <%=PUT.wayToHttpCall%>
            .then(responseData => return <%=camelNameFirstUpper%>.deserialize(responseData));

    }
    end-PUT-->
    <!--begin-POST
    public post<%=camelNameFirstUpper%>(): Promise<<%=camelNameFirstUpper%>> {

        return <%=POST.wayToHttpCall%>
            .then(responseData => return <%=camelNameFirstUpper%>.deserialize(responseData));

    }
    end-POST-->
    <!--begin-DELETE
    public delete<%=camelNameFirstUpper%>(): Promise<<%=camelNameFirstUpper%>> {

        return <%=DELETE.wayToHttpCall%>
            .then(responseData => return <%=camelNameFirstUpper%>.deserialize(responseData));

    }
    end-DELETE-->

}
