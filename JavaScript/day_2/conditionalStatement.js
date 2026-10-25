
// 1. if Statement
console.log("----- if Statement -----");

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}


// 2. if...else Statement
console.log("----- if...else Statement -----");

let marks = 28;

if (marks >= 33) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}


// 3. if...else if...else Statement
console.log("----- if...else if...else Statement -----");

let score = 75;

if (score >= 80) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else if (score >= 33) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}


// 4. Nested if Statement
console.log("----- Nested if Statement -----");

let studentAge = 20;
let hasID = true;

if (studentAge >= 18) {
    if (hasID === true) {
        console.log("Entry Allowed");
    } else {
        console.log("ID Required");
    }
} else {
    console.log("Entry Not Allowed");
}


// 5. switch Statement
console.log("----- switch Statement -----");

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}


// 6. Ternary Operator
console.log("----- Ternary Operator -----");

let ageCheck = 17;

let votingResult = ageCheck >= 18
    ? "Eligible to Vote"
    : "Not Eligible to Vote";

console.log("Result:", votingResult);


// 7. Multiple Conditions Using Logical Operators
console.log("----- Logical Conditions -----");

let userAge = 25;
let hasLicense = true;

if (userAge >= 18 && hasLicense) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}


// 8. Check Positive, Negative, or Zero
console.log("----- Positive, Negative, or Zero -----");

let number = -5;

if (number > 0) {
    console.log("Positive Number");
} else if (number < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}


// 9. Check Even or Odd
console.log("----- Even or Odd -----");

let num = 7;

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// 10. Check Leap Year
console.log("----- Leap Year -----");

let year = 2024;

if (
    (year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
) {
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is not a Leap Year");
}


// 11. Find the Greatest of Two Numbers
console.log("----- Greatest of Two Numbers -----");

let a = 25;
let b = 40;

if (a > b) {
    console.log("a is Greater");
} else if (b > a) {
    console.log("b is Greater");
} else {
    console.log("Both Numbers are Equal");
}


// 12. Find the Greatest of Three Numbers
console.log("----- Greatest of Three Numbers -----");

let x = 15;
let y = 30;
let z = 20;

if (x >= y && x >= z) {
    console.log("Greatest Number:", x);
} else if (y >= x && y >= z) {
    console.log("Greatest Number:", y);
} else {
    console.log("Greatest Number:", z);
}


// 13. Grade Calculator
console.log("----- Grade Calculator -----");

let studentMarks = 85;

if (studentMarks < 0 || studentMarks > 100) {
    console.log("Invalid Marks");
} else if (studentMarks >= 90) {
    console.log("Grade A+");
} else if (studentMarks >= 80) {
    console.log("Grade A");
} else if (studentMarks >= 70) {
    console.log("Grade B");
} else if (studentMarks >= 60) {
    console.log("Grade C");
} else if (studentMarks >= 33) {
    console.log("Grade D - Pass");
} else {
    console.log("Grade F - Fail");
}


// 14. Login Validation
console.log("----- Login Validation -----");

let correctUsername = "admin";
let correctPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (
    enteredUsername === correctUsername &&
    enteredPassword === correctPassword
) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// 15. Calculator Using switch
console.log("----- Calculator Using switch -----");

let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Addition:", num1 + num2);
        break;

    case "-":
        console.log("Subtraction:", num1 - num2);
        break;

    case "*":
        console.log("Multiplication:", num1 * num2);
        break;

    case "/":
        if (num2 !== 0) {
            console.log("Division:", num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    case "%":
        console.log("Remainder:", num1 % num2);
        break;

    default:
        console.log("Invalid Operator");
}


// 16. Check Vowel or Consonant
console.log("----- Vowel or Consonant -----");

let character = "a";

if (
    character.length === 1 &&
    character.toLowerCase() >= "a" &&
    character.toLowerCase() <= "z"
) {
    if ("aeiou".includes(character.toLowerCase())) {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
} else {
    console.log("Enter a single English letter");
}


// 17. Check Number Range
console.log("----- Number Range -----");

let value = 45;

if (value >= 1 && value <= 100) {
    console.log("Number is between 1 and 100");
} else {
    console.log("Number is outside the range");
}


// 18. Nullish Coalescing Operator (??)
console.log("----- Nullish Coalescing -----");

let username = null;

let displayName = username ?? "Guest";

console.log("Welcome,", displayName);


// 19. Optional Chaining (?.)
console.log("----- Optional Chaining -----");

let user = {
    name: "Aman"
};

console.log("User Name:", user.name);
console.log("User City:", user.address?.city);


// 20. Logical NOT Operator in a Condition
console.log("----- Logical NOT Condition -----");

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login First");
} else {
    console.log("Welcome Back");
}
