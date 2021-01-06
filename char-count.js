//Create a function that takes two strings as arguments 
//and returns the number of times the first string 
//(the single character) is found in the second string.

function charCount(myChar, str) {
    let times = 0;
    str.split('').map((char) => {
        if (char === myChar) {
            times++
        }
        return char;
    })
    return times;
}

charCount("b", "big fat bubble")