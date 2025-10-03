function birthdayCakeCandles(ar) {
  var max = ar[0];
  for(var i= 1; i< ar.length; i++){
      max = ar[i] > max ? ar[i] : max;
  }
  var count = 0;
  for(var i= 0; i< ar.length; i++){
      if(ar[i] == max)
          count++;
  }
    return count;
}