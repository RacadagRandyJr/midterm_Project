function breakingRecords(scores) {
    let highestScore = scores[0];
    let lowestScore = scores[0];

    let highestRecordBreaks = 0;
    let lowestRecordBreaks = 0;

    for (let i = 1; i < scores.length; i++) {
        const currentScore = scores[i];

        if (currentScore > highestScore) {
            highestScore = currentScore; 
            highestRecordBreaks++;
        } 
    
        else if (currentScore < lowestScore) {
            lowestScore = currentScore; 
            lowestRecordBreaks++;     
        }
    }

    return [highestRecordBreaks, lowestRecordBreaks];
}