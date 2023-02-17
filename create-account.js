/** Creates a bank account given a PIN number and an initial withdraw
 * amount. Returns an object with methods checkBalance, deposit, withdraw,
 * and changePin on it
 *
 * pin: string
 * amount: number
 *
 * returns: object
 */

function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      return `$${amount}`
    },
    deposit(inputPin, depositAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      amount += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
    },
    withdraw(inputPin, withdrawAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      if (amount < withdrawAmount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      amount -= withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
