// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  let leastBalanceAccount;
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      if (
        !leastBalanceAccount ||
        array[i].balance < leastBalanceAccount.balance
      ) {
        leastBalanceAccount = array[i];
      }
    }
  }
  return leastBalanceAccount ? [leastBalanceAccount] : [];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
