function birthday(s, d, m) {
    let count = 0; 
    for (let i = 0; i <= s.length - m; i++) {
        
        const segment = s.slice(i, i + m);

        const segmentSum = segment.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if (segmentSum === d) {
            count++; 
        }
    }

    return count; 
}