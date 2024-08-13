// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");

question1.showQuestion();



/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */

//answer//
var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
    this.addOption = function (option) {
        this.options.push(option);
    }
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        })
    }
}
var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
)
question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon"); 
question1.showQuestion()
var question2 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
)
question2.addOption("Earth");
question2.addOption("Saturn");
question2.addOption("Jupiter");
question2.addOption("Uranus");
question2.addOption("Neptune");
var question3 = new QuizQuestion(
    "What is the smallest country in the world?",
    "Vatican City"
)
question3.addOption("Monaco");
question3.addOption("Nauru");
question3.addOption("Tuvalu");
question3.addOption("Vatican City");
question3.addOption("San Marino");
question2.showQuestion();
question2.answer;