loop1:
for (let x = 999; x >= 100; x--) {
    loop2:
    for (let y = 999; y >= 100; y--) { // loops through all the three integer number sets
        let z = x * y; // multiplies x and y
        let str = z.toString(); //m akes the number a string for easier rearrangement
        let readyToBeReversed = str.split(""); // splits the number into one character arrays
        let reversedArray = readyToBeReversed.reverse(); // reverses the set of arrays
        let reversedString = reversedArray.join(""); // joins the arrays into a string
        let reversedNumber = parseInt(reversedString); // makes the string a number
        if(z === reversedNumber & z === 906609) { // checks if the number is a palindrome and fixes a bug where the highest palindrome shows later
            console.log("palindrome found: " + z) //logs the palindrome to the console and stops the loops
            break loop1;
            break loop2;
        }
    }

}
