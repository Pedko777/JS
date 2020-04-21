'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [
    { id: 1, amount: 200, type: 'deposit' },
    { id: 2, amount: 160, type: 'deposit' },
    { id: 3, amount: 60, type: 'withdraw' },
    { id: 4, amount: 70, type: 'withdraw' },
  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    //   console.log(amount);
    //   console.log(type);
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    //   console.log(amount);
    this.balance += amount;
    const newObj = this.createTransaction(amount, Transaction.DEPOSIT);
    // console.log(newObj);
    this.transactions = [...this.transactions, newObj];
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств');
      return;
    }

    this.balance -= amount;
    const newObj = this.createTransaction(amount, Transaction.WITHDRAW);
    // console.log(newObj);
    this.transactions = [...this.transactions, newObj];
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    console.log(id);
    for (const transaction of this.transactions) {
      if (this.transactions.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions)
      if (transaction.type === type) {
        total += this.transaction.amount;
      }
    return total;
  },
};

// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// const trEl = account.getTransactionDetails();

// if (trEl) {
//     console.log(trEl)
// } else {
//     console.log("Not found Obj");
// }
