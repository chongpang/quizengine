class QuizData {
    constructor(quizType, userId) {
        this.quizType = quizType;
        this.userId = userId;
    }
    getQuizype() {
        return this.quizType;
    }
    getUserId() {
        return this.userId;
    }
    // toJSON is automatically used by JSON.stringify
    toJSON() {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this, {
            // convert fields that need converting
            quizType: this.quizType,
            userId: this.userId
        });
    }
    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json) {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, QuizData.reviver);
        }
        else {
            // create an instance of the User class
            let quizDate = Object.create(QuizData.prototype);
            // copy all the fields from the json object
            return Object.assign(quizDate, json, {});
        }
    }
    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    static reviver(key, value) {
        return key === "" ? QuizData.fromJSON(value) : value;
    }
}
//# sourceMappingURL=QuizData.js.map