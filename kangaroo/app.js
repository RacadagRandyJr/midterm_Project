function kangaroo(x1, v1, x2, v2) {

    if (x2 > x1 && v2 >= v1) {
        return "NO";
    }
   
    if (x1 > x2 && v1 <= v2) {
        return "NO";
    }

    if (v1 === v2) {
        return (x1 === x2) ? "YES" : "NO";
    }

    const numJumps = (x2 - x1) / (v1 - v2);

    if (numJumps >= 0 && Number.isInteger(numJumps)) {
        return "YES";
    } else {
        return "NO";
    }
}