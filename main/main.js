/**
 * Created by xiongshasha on 17-7-14.
 */
"use strict";

function fizzBuzzWhizz(input) {
    let stringArray = input.toString().split('');
    let oneFizzBuzzWhizzNumber;
    if(stringArray.indexOf('3')!=-1)
        oneFizzBuzzWhizzNumber = "fizz";//在数组中搜索字符"3"
    else if(!oneFizzBuzzWhizzNumber) {
        if (input % 3 != 0&&input%5!=0&&input%7!=0)
             oneFizzBuzzWhizzNumber = input;
        else if (input % 3 == 0&&input%5!=0&&input%7!=0)
             oneFizzBuzzWhizzNumber = 'fizz';
        else if (input % 3 != 0&&input%5==0&&input%7!=0)
             oneFizzBuzzWhizzNumber = 'buzz';
        else if (input % 3 != 0&&input%5!=0&&input%7==0)
             oneFizzBuzzWhizzNumber = 'whizz';
        else if (input % 3 == 0&&input%5==0&&input%7!=0)
             oneFizzBuzzWhizzNumber = 'fizzbuzz';
        else if (input % 3 == 0&&input%5!=0&&input%7==0)
             oneFizzBuzzWhizzNumber = 'fizzwhizz';
        else if (input % 3 != 0&&input%5==0&&input%7==0)
             oneFizzBuzzWhizzNumber = 'buzzwhizz';
        else if (input % 3 == 0&&input%5==0&&input%7==0)
             oneFizzBuzzWhizzNumber = 'fizzbuzzwhizz';
    }
    return oneFizzBuzzWhizzNumber;
}

function processInputs(inputs) {
    let result = [];
    result = inputs.map(fizzBuzzWhizz);
    return result;
}

function printFizzBuzzWhizz(inputs) {
    let processedInputs=processInputs(inputs);
    console.log(processedInputs);
}
