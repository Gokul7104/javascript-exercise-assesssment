// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.

//answer//
function outer() {
    let innerVariable = "Hello, World!";
  
    function inner() {
      console.log(innerVariable);
    }
    return inner;
  }
  const innerFunc = outer();
  innerFunc();
  function outer() {
    let outerVariable = "Outer Variable";
    function inner1() {
      console.log("Inner Function 1: " + outerVariable);
    }
    function inner2() {
      console.log("Inner Function 2: " + outerVariable);
    }
    function inner3() {
      console.log("Inner Function 3: " + outerVariable);
    }
    return { inner1, inner2, inner3 };
  }
  const innerFuncs = outer();
  innerFuncs.inner1(); 
  innerFuncs.inner2(); 
  innerFuncs.inner3(); 
  function personAccount(firstname, lastname) {
    let incomes = new Map();
    let expenses = new Map();  
    function totalIncome() {
      let total = 0;
      for (let [income, amount] of incomes) {
        total += amount;
      }
      return total;
    }
    function totalExpense() {
      let total = 0;
      for (let [expense, amount] of expenses) {
        total += amount;
      }
      return total;
    }
    function accountInfo() {
      console.log(`Account Info: ${firstname} ${lastname}`);
    }  
    function addIncome(income, amount) {
      incomes.set(income, amount);
    }  
    function addExpense(expense, amount) {
      expenses.set(expense, amount);
    }  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance,
    };
  }
  const account = personAccount("John", "Doe");
  account.addIncome("Salary", 5000);
  account.addIncome("Freelance", 2000);
  account.addExpense("Rent", 1500);
  account.addExpense("Food", 1000);
  console.log(account.totalIncome()); 
  console.log(account.totalExpense());
  account.accountInfo(); 
  console.log(account.accountBalance()); 