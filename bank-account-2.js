var accounts = [];


// createAccount(account)
// push onto accounts array
// return account
function createAccount(account){
  accounts.push(account);
  return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount(username){
  var matchedAccount;

  accounts.forEach(function (account){
    if (account.username === username){
      matchedAccount = account;
    }
  })
  return matchedAccount;
}

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

var franksAccount = createAccount({
  username: 'Frank',
  balance: 0
})

deposit(franksAccount, 100);
console.log(getBalance(franksAccount));

withdraw(franksAccount, 11);
console.log(getBalance(franksAccount));

var existingAccount = getAccount('Frank');
console.log(getBalance(existingAccount));

var ruthsAccount = createAccount({
  username: 'Ruth001',
  balance: 12
});

console.log(accounts);

var existingRuthAccount = getAccount('Ruth001');
console.log(existingRuthAccount);
