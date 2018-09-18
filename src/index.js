module.exports = function longestConsecutiveLength(array) {
    //задали функцию сортировки массива от наименьшего к наибольшему
  function forsort(a,b)
  {return a - b};
  //условие для length =1 or 0
    if(array.length === 0)
        return 0;
    if(array.length === 1)
        return 1;

  let count = 1;
  let fortest =0;
  array.sort(forsort);
  //cycle for элементов ,которые идут попорядку
  for(let i=1; i<array.length;i++){
    if(array[i]-array[i-1] === 0)
        {continue;}
    if(array[i]-array[i-1] === 1)
        {count++;}
    if(array[i]-array[i-1] > 1){
        fortest = (count>fortest)? count :fortest;
            count=1;//обновляем счет Consecutivelength ,когда в массиве обрывается первый порядок чисел.
  }
}
    return fortest; 
}