function migratoryBirds(arr) {
    
    const birdCounts = {};

    for (const birdType of arr) {
        birdCounts[birdType] = (birdCounts[birdType] || 0) + 1;
    }

    let maxCount = 0;
    let mostFrequentBirdId = Infinity; 

    for (const birdType in birdCounts) {
        const currentCount = birdCounts[birdType];
        const currentBirdId = parseInt(birdType); 

        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequentBirdId = currentBirdId;
        } else if (currentCount === maxCount) {
           
            if (currentBirdId < mostFrequentBirdId) {
                mostFrequentBirdId = currentBirdId;
            }
        }
    }

    return mostFrequentBirdId;
}