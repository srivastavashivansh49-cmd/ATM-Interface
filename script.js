let balance = 1000;

const balanceText = document.getElementById("balance");
const messageText = document.getElementById("message");
const amountInput = document.getElementById("amount");

function updateBalance() {
  balanceText.textContent = "$" + balance.toFixed(2);
}

function getAmount() {
  return Number(amountInput.value);
}

function showMessage(message) {
  messageText.textContent = message;
}

function checkBalance() {
  updateBalance();
  showMessage("Your current balance is shown above.");
}

function depositMoney() {
  const amount = getAmount();

  if (amount > 0) {
    balance += amount;
    updateBalance();
    showMessage("$" + amount.toFixed(2) + " deposited successfully.");
    amountInput.value = "";
  } else {
    showMessage("Please enter a valid deposit amount.");
  }
}

function withdrawMoney() {
  const amount = getAmount();

  if (amount <= 0) {
    showMessage("Please enter a valid withdrawal amount.");
  } else if (amount > balance) {
    showMessage("Withdrawal failed. Insufficient balance.");
  } else {
    balance -= amount;
    updateBalance();
    showMessage("$" + amount.toFixed(2) + " withdrawn successfully.");
    amountInput.value = "";
  }
}

function exitATM() {
  showMessage("Thank you for using the ATM. Have a good day!");
  amountInput.value = "";
}
