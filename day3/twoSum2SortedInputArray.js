var twoSum = function(numbers, target) {
  let leftIndex = 0
  let rightIndex = numbers.length-1  
  while((numbers[leftIndex]+numbers[rightIndex])!==target){
      if ((numbers[leftIndex]+numbers[rightIndex])>target){
          rightIndex--
      } else if ((numbers[leftIndex]+numbers[rightIndex])<target){
          leftIndex++
      }
  }
  leftIndex++
  rightIndex++
  return [leftIndex,rightIndex]
};

console.log(twoSum([2,7,11,15],9))