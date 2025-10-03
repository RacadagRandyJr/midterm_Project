function beautifulBinaryString(b) {
    let changes = 0;
    for (let i = 0; i < b.length - 2; i++) {
       
        if (b[i] === '0' && b[i + 1] === '1' && b[i + 2] === '0') {
            changes++; 
            i += 2; 
        }
    }
    return changes;
}