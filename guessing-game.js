/** Returns a function that allows you to guess a random number
 * between 0 and 99. A new game selects a new random number
 *
 * returns: function
 */

function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let numGuesses = 0;
  let hasWon = false;

  return function guess(num) {
    if (hasWon) return "The game is over, you already won!";
    numGuesses += 1;
    if (num === answer) {
      hasWon = true;
      const isPlural = numGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numGuesses} ${isPlural}.`;
    } else if (num < answer) {
      return `${num} is too low!`;
    } else {
      return `${num} is too high!`;
    }
  };
}

module.exports = { guessingGame };
