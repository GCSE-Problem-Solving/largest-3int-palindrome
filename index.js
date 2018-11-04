for (let x = 999; x >= 100; x--) {

    for (let y = 999; y >= 100; y--) {
        //loop through all the possible 3 integer products 
        let z = x * y; //all the three integer products
        let str = z.toString(); //changes the number to a string to be split
        let readyToBeReversed = str.split(""); //splits the string into an array of letter-long strings
        let reversedArray = readyToBeReversed.reverse(); //puts all the strings in backwards order
        let reversedString = reversedArray.join(""); //joins the strings back together into one whole string
        let reversedNumber = parseInt(reversedString); //changes string to a number
        if(z === reversedNumber) { 
            console.log("palindrome found: " + z)
            break;//if the number is a palindrome, log it to the console then stop the code.
        }
    }

}
