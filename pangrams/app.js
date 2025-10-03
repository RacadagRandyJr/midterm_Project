function pangrams(s) {
    
    const lowerCaseS = s.toLowerCase();

    const uniqueLetters = new Set();

    for (let i = 0; i < lowerCaseS.length; i++) {
        const char = lowerCaseS[i];

        if (char >= 'a' && char <= 'z') {
            uniqueLetters.add(char);
        }
    }

    if (uniqueLetters.size === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}