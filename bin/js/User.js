class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.created = new Date();
    }
    getName() {
        return this.name;
    }
    // toJSON is automatically used by JSON.stringify
    toJSON() {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this, {
            // convert fields that need converting
            created: this.created.toString(),
            name: this.name,
            age: this.age
        });
    }
    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json) {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, User.reviver);
        }
        else {
            // create an instance of the User class
            let user = Object.create(User.prototype);
            // copy all the fields from the json object
            return Object.assign(user, json, {
                // convert fields that need converting
                created: new Date(json.created),
            });
        }
    }
    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    static reviver(key, value) {
        return key === "" ? User.fromJSON(value) : value;
    }
}
//# sourceMappingURL=User.js.map