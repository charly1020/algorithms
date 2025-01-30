/* Each O() tell us how good and algorithm does with regards computing time and memory use grows based on the input */

/*  O(N): Grows linearly in relation with the input */
// Ex
function getSumCode(n: string) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  return sum;
}
