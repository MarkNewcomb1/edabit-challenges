function largestSwap(num) {
    //Write a function that takes a two-digit 
    //number and determines if it's 
    //the largest of two possible 
    //digit swaps.

    return num.toString().split('').reverse().join('') <= num;
}

largestSwap(27);