class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(value) {
    if (value <= 0) {
      return;
    }

    this.#balance += value;
  }

  withdraw(value) {
    if(value <= 0 || value > this.#balance) {
      return;
    }

    this.#balance -= value;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());