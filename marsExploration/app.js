function marsExploration(s) {
    let changedCharacters = 0;
    const expectedMessage = "SOS";

    for (let i = 0; i < s.length; i++) {
    
        const expectedChar = expectedMessage[i % 3];
        if (s[i] !== expectedChar) {
            changedCharacters++;
        }
    }
    return changedCharacters;
}