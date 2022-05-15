var reverseWords = function(input){
    return input.split(" ").map(e=>{
        let array = e.split("")
        let temp
        let left = 0
        let right = array.length
        while(left<right){
            temp=array[left]
            array[left++]=array[right]
            array[right--]=temp
        }
        return array.join("")
    }).join(" ")
}

console.log(reverseWords("Let's take LeetCode contest"))