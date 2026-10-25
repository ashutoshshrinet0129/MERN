let str = "JavaScript";
let count = 0;
for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if ("aeiou".includes(ch)) {
        count++;
    }
}
console.log("Total vowels:", count);