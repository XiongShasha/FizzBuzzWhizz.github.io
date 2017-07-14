/**
 * Created by xiongshasha on 17-7-14.
 */
"use strict";
//#1.将输入数字变成字符串stringArray:[String],然后判断规则3,4,5，最后得出经过游戏之后的数字或者字符串//15min
function fizzBuzzWhizz(input) {
    let stringArray = input.toString().split('');
    let oneFizzBuzzWhizzNumber;
    if(stringArray.indexOf('3')!=-1)
        oneFizzBuzzWhizzNumber = "fizz";
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
//#2. 遍历1~100s所有数字，得出所有数字经过游戏所得到到的数字或者字符串//15min
function processInputs(inputs) {
    let result = [];
    result = inputs.map(fizzBuzzWhizz);
    return result;
}
//#3. 打印出结果//15min
function printFizzBuzzWhizz(inputs) {
    let processedInputs=processInputs(inputs);
    console.log(processedInputs);
}

function NumberTest(number) {
    let stringArray = number.toString().split('');
    let oneFizzBuzzWhizzNumber;
    if (stringArray.indexOf('3') != -1)
        oneFizzBuzzWhizzNumber = "fizz";
    else 
    {
        if (number % 3 == 0) 
        {
            if (number % 5 == 0) 
            {
                if(number%7==0)
                    oneFizzBuzzWhizzNumber = "fizzbuzzwhizz";
                else
                    oneFizzBuzzWhizzNumber = "fizzbuzz";
            }
            else 
            {
                if(number%7==0)
                    oneFizzBuzzWhizzNumber = "fizzwhizz";
                else
                    oneFizzBuzzWhizzNumber = "fizz";
            }
        }
        else if (number % 5 == 0) 
        {
            if(number%7==0)
                oneFizzBuzzWhizzNumber = "buzzwhizz";
            else
                oneFizzBuzzWhizzNumber = "buzz";
        }
        else if(number% 7 == 0)
            oneFizzBuzzWhizzNumber = "whizz";
        else
            oneFizzBuzzWhizzNumber = number.toString();
    }
    return oneFizzBuzzWhizzNumber;
}
