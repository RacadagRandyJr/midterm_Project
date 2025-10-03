function flatlandSpaceStations(n, c) {
    if (n === c.length)
        return 0;
    let max = 0;
    for (var i = 0; i < n; i++) {
        let min = Number.MAX_VALUE;
        for (var j = 0; j < c.length; j++) {
           if( Math.abs(c[j] - i) < min)
              min= Math.abs(c[j] - i);
        }
        if(min>max)
           max = min;
    }
    return max;

}