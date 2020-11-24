/* 

  Operator Precedence:
    1st Priority[Precedence value = 21] : ()
    2nd Priority[Precedence value = ] : {}
    3rd Priority[Precedence value = 20 	left-to-right] : []
    4th Priority[Precedence value = 16 right-to-left] : 	Exponentiation(… ** …)
    5th Priority[Precedence value = 15 	left-to-right] : Multiplication(… * …)
    6th Priority[Precedence value = 15 left-to-right] : Division(… / …)
    7th Priority[Precedence value = 15 left-to-right] : Remainder(… % …)
    8th Priority[Precedence value = 14 left-to-right] : Addition(… + …)
    9th Priority[Precedence value = 14 left-to-right] : Subtraction(… - …)
    10th Priority[Precedence value = 13 left-to-right] : Bitwise Left Shift(… << …)
    11th Priority[Precedence value = 13 left-to-right] : Bitwise Right Shift(… >> …)
    12th Priority[Precedence value = 13 left-to-right] : Bitwise Unsigned Right Shift(… >>> …)
    13th Priority[Precedence value = 12 left-to-right] : Less Than(… < …)
    14th Priority[Precedence value = 12 left-to-right] : Less Than Or Equal(… <= …)
    15th Priority[Precedence value = 12 left-to-right] : Greater Than(… > …)
    16th Priority[Precedence value = 12 left-to-right] : Greater Than Or Equal(… >= …)
    17th Priority[Precedence value = 11 left-to-right] : Equality(… == …)
    18th Priority[Precedence value = 11 left-to-right] : Inequality(… != …)
    19th Priority[Precedence value = 11 left-to-right] : Strict Equality(… === …)
    20th Priority[Precedence value = 11 left-to-right] : Strict Inequality(… !== …)
    21th Priority[Precedence value = 10 left-to-right] : Bitwise AND(… & …)
    22th Priority[Precedence value = 9 left-to-right] : 	Bitwise XOR(… ^ …)
    23th Priority[Precedence value = 8 left-to-right] : Bitwise OR(… | …)
    24th Priority[Precedence value = 6 left-to-right] : Logical AND(… && …)
    25th Priority[Precedence value = 5 left-to-right] : Logical OR(… || …)
    26th Priority[Precedence value = 4 right-to-left] : Conditional(… ? … : …)
    27th Priority[Precedence value = 3 right-to-left] : Assignment(… = …),(… += …),(… -= …),(… **= …),(… *= …),(… /= …),(… %= …),(… <<= …),(… >>= …) etc.

*/

let now = 2020;
let oviBirth = 1995;
let adultAge = 21;

let isAdult = now - oviBirth >= adultAge;
//check adult or notAdult
document.getElementById('name1').innerHTML = isAdult;
console.log(isAdult);

// Find average Age //
let oviAge = 23;
let jewelAge = 25;
let aslamAge = 24;
let averageAge = (oviAge + jewelAge + aslamAge)/3;
//Here, first priority work is value of inside (). Then work divide operator
//show result
document.getElementById('name2').innerHTML = averageAge;
console.log(averageAge);

