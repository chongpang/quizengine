class QuizData {

  // 1-> Grid matching, identify pairs of info
  // 2-> Concentration, identify hidden pairs of info
  // 3-> Choose correct match for giving item
  // 4-> That's a match, decide whenther two items fit together
  // 5-> Which match is wrong, spot infomation that doesn't go together.
  // 6-> Flash cards, associated pieces of information
  // 7-> What's connected, identify facts that fit for given item.
  // 8-> Type the facts, type the facts that correspond to a given item
  // 9-> Fact grid, type all the items that correspondint to th given clu.
  // 10-> Guess that item, type the item suggested by clue that appear one by one
  // 11-> Recall all items, type as many items as you can remember
  // 12-> Put in order, pieces a group of item in their cocrect  order.
  // 13-> Put in order, arrange all the items in there correct absolute order
  // 14-> Before or after, compare two items and say which comes before and which after .
  // 15-> Let's compare, compare items and say which ones comes first or last.
  // 16-> Choose the category, identify the category that an item belongs to.
  // 17-> What belongs, recall the members of a series of categories.
  private quizType: number;
  private userId:  string;

  constructor( quizType, userId) {
    this.quizType =quizType;
    this.userId = userId;
  }

  getQuizype(): number {
    return this.quizType;
  }

  getUserId(): string {
    return this.userId;
  }

  // toJSON is automatically used by JSON.stringify
  toJSON(): QuizDataSON {
    // copy all fields from `this` to an empty object and return in
    return Object.assign({}, this, {
      // convert fields that need converting
      quizType: this.quizType,
      userId: this.userId
    });
  }

  // fromJSON is used to convert an serialized version
  // of the User to an instance of the class
  static fromJSON(json: QuizDataSON|string): QuizData {
    if (typeof json === 'string') {
      // if it's a string, parse it first
      return JSON.parse(json, QuizData.reviver);
    } else {
      // create an instance of the User class
      let quizDate = Object.create(QuizData.prototype);
      // copy all the fields from the json object
      return Object.assign(quizDate, json, {
        // convert fields that need converting
      });
    }
  }

  // reviver can be passed as the second parameter to JSON.parse
  // to automatically call User.fromJSON on the resulting value.
  static reviver(key: string, value: any): any {
    return key === "" ? QuizData.fromJSON(value) : value;
  }
}

// A representation of User's data that can be converted to
// and from JSON without being altered.
interface QuizDataSON {
  userId:    string;
  quizType:  number;
  dataTable: {[key: string]: string}[];
  lrsConfig: {[key: string]: string};
}