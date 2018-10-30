for (let x = 999; x >= 100; x--) {

    for (let y = 999; y >= 100; y--) {
        let z = x * y;
        let str = z.toString();
        let readyToBeReversed = str.split("");
        let reversedArray = readyToBeReversed.reverse();
        let reversedString = reversedArray.join("");
        let reversedNumber = parseInt(reversedString);
        if(z === reversedNumber) {
            console.log("palindrome found: " + z)
        }
    }

}
/*if(z === reversedNumber) {
    console.log("Palindrome found: " + z)
}*/