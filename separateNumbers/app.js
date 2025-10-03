function separateNumbers(s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let first = s.substring(0, i);

        if (first.startsWith('0') && first.length > 1) {
            continue;
        }

        let currentNum = BigInt(first);
        let generatedString = first;

        while (generatedString.length < s.length) {
            currentNum++;
            generatedString += currentNum.toString();
        }

        if (generatedString === s) {
            console.log(`YES ${first}`);
            return;
        }
    }

    console.log("NO");
}