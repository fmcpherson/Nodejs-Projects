var account = {
  balance: 0
};

// deposit(account, amount)
function deposit(account, amount){
  return account.balance = account.balance + amount;
}
// withdraw(account, amount)
function withdraw(account, amount){
  return account.balance = account.balance - amount;
}
// getBalance(account)
function getBalance(account){
  return account.balance;
}

console.log("Current balance = $" + getBalance(account));
deposit(account, 100);
console.log("Current balance = $" + getBalance(account));

deposit(account, 100);
console.log("Current balance = $" + getBalance(account));

withdraw(account, 50);
console.log("Current balance = $" + getBalance(account));
