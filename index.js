loop1:
for (let x = 999; x >= 100; x--) {
    loop2:
    for (let y = 999; y >= 100; y--) {
        let z = x * y;
        let str = z.toString();
        let readyToBeReversed = str.split("");
        let reversedArray = readyToBeReversed.reverse();
        let reversedString = reversedArray.join("");
        let reversedNumber = parseInt(reversedString);
        if(z === reversedNumber & z === 906609) {
            console.log("palindrome found: " + z)
            break loop1;
            break loop2;
        }
    }

}