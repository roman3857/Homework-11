// const bankAccount = {
//   ownerName: "Ivan Ivanov",
//   accountNumber: "1234567890",
//   balance: 1000, // початковий баланс

//   deposit: function (amount) {
//     this.balance += amount;
//     alert(
//       `Ви поповнили рахунок на ${amount} грн. Поточний баланс: ${this.balance} грн.`,
//     );
//   },

//   withdraw: function (amount) {
//     if (amount > this.balance) {
//       alert(`Недостатньо коштів! Поточний баланс: ${this.balance} грн.`);
//     } else {
//       this.balance -= amount;
//       alert(`Ви зняли ${amount} грн. Поточний баланс: ${this.balance} грн.`);
//     }
//   },
// };

// if (
//   confirm(
//     "Бажаєте поповнити рахунок? Натисніть 'OK' для поповнення або 'Cancel' для зняття грошей",
//   )
// ) {
//   const depositAmount = Number(prompt("Введіть суму для поповнення:"));
//   if (!isNaN(depositAmount) && depositAmount > 0) {
//     bankAccount.deposit(depositAmount);
//   } else {
//     alert("Некоректна сума!");
//   }
// } else {
//   const withdrawAmount = Number(prompt("Введіть суму для зняття:"));
//   if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
//     bankAccount.withdraw(withdrawAmount);
//   } else {
//     alert("Некоректна сума!");
//   }
// }

// const weather = {
//   temperature: Number(prompt("Напишіть температуру")),
//   humidity: "50%",
//   windSpeed: "20m/s",

//   temperatureCheck: function () {
//     return this.temperature < 0;
//   },
// };

// if (weather.temperatureCheck()) {
//   alert("температура нижче 0 градусів Цельсія");
// } else {
//   alert("температура вище або дорівнює 0 градусів Цельсія");
// }


const user = {
  name: Roman,
  email: "roman@123gmail.com",
  password: 123456789,
  login: function () {
    Number(prompt(""))
  }
}