
export class ConnectionStore {

    let connectionPromise: Promise<Connection>;

    constructor() {

    }
    
    public getConnection(): Promise<Connection> {

        if (this.connectionPromise != null) {
            return this.connectionPromise;
        }

        return this.restangularResources.connectionResources().one().get()
            .then(responseData => return Connection.deserialize(responseData));

    }
    end-GET-->
    <!--begin-PATCH
    public patchConnection(): Promise<Connection> {

        return <%=PATCH.wayToHttpCall%>
            .then(responseData => return Connection.deserialize(responseData));

    }
    end-PATCH-->
    <!--begin-PUT
    public putConnection(): Promise<Connection> {

        return <%=PUT.wayToHttpCall%>
            .then(responseData => return Connection.deserialize(responseData));

    }
    end-PUT-->
    
    public postConnection(): Promise<Connection> {

        return this.restangularResources.connectionResources().delete()
            .then(responseData => return Connection.deserialize(responseData));

    }
    end-POST-->
    <!--begin-DELETE
    public deleteConnection(): Promise<Connection> {

        return <%=DELETE.wayToHttpCall%>
            .then(responseData => return Connection.deserialize(responseData));

    }
    end-DELETE-->

}
