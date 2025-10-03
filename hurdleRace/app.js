function hurdleRace(k, height) {
    const maxHurdle = Math.max(...height);
    return maxHurdle > k ? maxHurdle - k : 0;
}