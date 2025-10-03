function climbingLeaderboard(ranked, player) {
    const uniqueRanks = [...new Set(ranked)];
    
    let result = [];
    let index = uniqueRanks.length - 1;

    for (let score of player) {
        while (index >= 0 && score >= uniqueRanks[index]) {
            index--;
        }
        result.push(index + 2);
    }

    return result;
}