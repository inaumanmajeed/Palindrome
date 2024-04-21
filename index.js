const a = "deified";

const split = a.split("");
const reverse = split.reverse("");
const word = reverse.join("");
if (a === word) {
    console.log("This is a palindrome");
} else {
    console.log("This is not a palindrome");
}