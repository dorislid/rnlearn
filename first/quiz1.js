function sumArray(array) {
  // 算法写这里
  if(array instanceof Array === false || array.length === 0){
    return 0;
  }
  /*数组正序排列*/
      array = array.sort(function (a, b) {
          return a - b;
      });
      /*去头，去尾*/
      array.shift();
      array.pop();
  var sum = 0;


  for(i in array){
    sum = sum + array[i];
  };

  return sum;
}
module.exports = sumArray
