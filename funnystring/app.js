function funnyString(s) {
    const n = s.length;
    const reversedS = s.split('').reverse().join('');

    for (let i = 0; i < n - 1; i++) {
        const diffOriginal = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        const diffReversed = Math.abs(reversedS.charCodeAt(i) - reversedS.charCodeAt(i + 1));

        if (diffOriginal !== diffReversed) {
            return "Not Funny";
        }
    }
    return "Funny";
}