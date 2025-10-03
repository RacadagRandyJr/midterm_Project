function caesarCipher(s, k) {
    k = k % 26; 

    return s.split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            let originalCharCode = char.charCodeAt(0);
            let shiftedCharCode = originalCharCode + k;
            
            if (shiftedCharCode > 'Z'.charCodeAt(0)) {
                shiftedCharCode -= 26; 
            }
            return String.fromCharCode(shiftedCharCode);
        } 

        else if (char >= 'a' && char <= 'z') {
            let originalCharCode = char.charCodeAt(0);
            let shiftedCharCode = originalCharCode + k;
            
            if (shiftedCharCode > 'z'.charCodeAt(0)) {
                shiftedCharCode -= 26;
            }
            return String.fromCharCode(shiftedCharCode);
        } 
    
        else {
            return char;
        }
    }).join('');
}