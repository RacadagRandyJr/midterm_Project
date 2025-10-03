function bonAppetit(bill, k, b) {
    
    const totalBillSum = bill.reduce((sum, item) => sum + item, 0);

    const annaShouldPaySum = totalBillSum - bill[k];

    const annaActualShare = annaShouldPaySum / 2;

    if (annaActualShare === b) {
        console.log("Bon Appetit");
    } else {
       
        const refundAmount = b - annaActualShare;
        console.log(refundAmount);
    }
}