let vowels = ['a', 'e', 'i', 'o', 'u',];
let string = "TEST STRING";
let vowelString = "";
let counter = 0;

string = string.toLowerCase();

vowels.forEach(vowel => {
    while (string.includes(vowel)) {
        counter++;
        string = string.replace(vowel, "")
        vowelString += vowel;
    }
});

console.log("Vovels: " + counter);
console.log("Remainders of string: " + string);
console.log("All Vowvels: " + vowelString);