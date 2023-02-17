/** Returns a new function for which if number passed in. If no arguments,
 * returns the total of the numbers passed to it so far.
 *
 * total: number
 *
 * returns: function or number
 */

function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) return total;
    total += num;
    return addNext;
  };
}

module.exports = { curriedAdd };
