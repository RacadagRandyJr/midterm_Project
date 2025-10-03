function getTotalX(a, b) {
    let count = 0;
    for (let x = Math.max(...a); x <= Math.min(...b); x++) {
        let isFactorOfAllA = true;
       
        for (let i = 0; i < a.length; i++) {
            if (x % a[i] !== 0) {
                isFactorOfAllA = false;
                break;
            }
        }

        if (isFactorOfAllA) {
            let isFactorOfAllB = true;
    
            for (let j = 0; j < b.length; j++) {
                if (b[j] % x !== 0) {
                    isFactorOfAllB = false;
                    break;
                }
            }

            if (isFactorOfAllB) {
                count++;
            }
        }
    }
    return count;
}