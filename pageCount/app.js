function pageCount(n, p) {
    const turnsFromFront = Math.floor(p / 2);
   
    let turnsFromBack;
    if (n % 2 === 0 && p % 2 !== 0) {
        turnsFromBack = Math.floor((n - p) / 2) + 1;
    } else {
        turnsFromBack = Math.floor((n - p) / 2);
    }

    return Math.min(turnsFromFront, turnsFromBack);
}