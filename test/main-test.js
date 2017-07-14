'use strict';

describe('pos', () => {

  it('calculateFizzBuzzWhizz', () => {
    const inputs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
        16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
        46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
        61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,
        76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,
        91,92,93,94,95,96,97,98,99,100];

      spyOn(console, 'log');

      printFizzBuzzWhizz(inputs);

    const expectText = [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 'whizz', 8, 'fizz', 'buzz',
                         11, 'fizz', 'fizz', 'whizz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz',
                         'fizzwhizz', 22, 'fizz', 'fizz', 'buzz', 26, 'fizz', 'whizz', 29, 'fizz',
                         'fizz', 'fizz', 'fizz', 'fizz', 'fizz', 'fizz', 'fizz', 'fizz', 'fizz', 'buzz',
                         41, 'fizzwhizz', 'fizz', 44, 'fizzbuzz', 46, 47, 'fizz', 'whizz', 'buzz',
                         'fizz', 52, 'fizz', 'fizz', 'buzz', 'whizz', 'fizz', 58, 59, 'fizzbuzz',
                         61, 62, 'fizz', 64, 'buzz', 'fizz', 67, 68, 'fizz',
                         'buzzwhizz', 71, 'fizz', 'fizz', 74, 'fizzbuzz', 76, 'whizz', 'fizz', 79, 'buzz',
                         'fizz', 82, 'fizz', 'fizzwhizz', 'buzz', 86, 'fizz', 88, 89, 'fizzbuzz',
                         'whizz', 92, 'fizz', 94, 'buzz', 'fizz', 97, 'whizz', 'fizz', 'buzz' ];

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});