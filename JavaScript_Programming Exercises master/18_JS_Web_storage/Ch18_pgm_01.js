// Level 1

// Store you first name, last name, age, country, city in your browser localStorage.


// Level 2

// Create a student object. The student object will have first name, last name, age, skills, 
// country, enrolled keys and values for the keys. Store the student object in your browser 
// localStorage.


// Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.

//answer//
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const country = 'USA';
const city = 'New York';
localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);
const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'USA',
    enrolled: true
  }
  localStorage.setItem('student', JSON.stringify(student));
class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = incomes;
      this.expenses = expenses;
    }
  
    totalIncome() {
      return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    }
  
    totalExpense() {
      return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }
  
    accountInfo() {
      return `Account Info: ${this.firstname} ${this.lastname}`;
    }
  
    addIncome(income) {
      this.incomes.push(income);
    }
  
    addExpense(expense) {
      this.expenses.push(expense);
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }

  const personAccount = new PersonAccount(
    'John',
    'Doe',
    [
      { amount: 1000, description: 'Salary' },
      { amount: 500, description: 'Freelance' }
    ],
    [
      { amount: 500, description: 'Rent' },
      { amount: 200, description: 'Utilities' }
    ]
  )
  localStorage.setItem('personAccount', JSON.stringify(personAccount));