//my original solution
var reverseString = function(s) {
    let temp
      for (i=0;i<Math.floor(s.length/2);i++){
          temp = s[i]
          s[i]=s[s.length-1-i]
          s[s.length-1-i]=temp
      }
      console.log(s)
  };

  //two pinters:
  var reverseString2 = function(s) {
      let temp
      let left = 0
      let right = s.length-1
      while(left<right){
          temp = s[left]
          s[left++]=s[right]
          s[right--]=temp
      }
      console.log(s)
  }

  reverseString2(["V","a","d","z","i","m"])
  reverseString2(["V","a","d","z","i","m","m"])