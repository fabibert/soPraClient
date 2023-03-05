/**
 * User model
 */

//want to add creation data to user class

class User {
    constructor(data = {}) {
        this.id = null;
        this.name = null;
        this.username = null;
        this.token = null;
        this.status = null;
        //TODO: unused password and creationDate
        this.password = null;
        this.creationDate = null;
        Object.assign(this, data);
    }
}

export default User;
