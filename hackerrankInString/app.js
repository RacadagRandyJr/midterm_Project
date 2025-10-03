function hackerrankInString(s) {
    const target = "hackerrank";
    let targetIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === target[targetIndex]) {
            targetIndex++;
        }
        if (targetIndex === target.length) {
            return "YES";
        }
    }

    return "NO";
}