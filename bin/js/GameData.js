class GameData {
    constructor(gameType, userId) {
        this.gameType = gameType;
        this.userId = userId;
        this.created = new Date();
    }
    getGameType() {
        return this.gameType;
    }
    getUserId() {
        return this.userId;
    }
    // toJSON is automatically used by JSON.stringify
    toJSON() {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this, {
            // convert fields that need converting
            created: this.created.toString()
        });
    }
    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json) {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, GameData.reviver);
        }
        else {
            // create an instance of the User class
            let user = Object.create(GameData.prototype);
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
        return key === "" ? GameData.fromJSON(value) : value;
    }
}
//# sourceMappingURL=GameData.js.map