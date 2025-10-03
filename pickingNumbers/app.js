function pickingNumbers(a) {
    let frequency = new Array(101).fill(0);

    for (let i = 0; i < a.length; i++) {
        frequency[a[i]]++;
    }

    for (let i = 1; i < frequency.length; i++) {

        let currentLength = frequency[i] + frequency[i - 1];
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}