function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function canCreatePalindrome(word) {
    const result = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 2; j <= word.length; j++) {
            const substring = word.substring(i, j);
            if (isPalindrome(substring) && substring.length >= 3) {
                result.push(substring);
            }
        }
    }
    return result;
}

const inputWord = 'saippuakivikauppias'; // input word
const palindromeCheck = isPalindrome(inputWord) ? 'Yes, your word is Palindrome' : 'No, your word is not Palindrome';
console.log('Is palindrome:', palindromeCheck);

if (isPalindrome(inputWord)) {
    console.log('Possible palindromic substrings with at least 3 letters:', canCreatePalindrome(inputWord));
}