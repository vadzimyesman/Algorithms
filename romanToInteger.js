const roman = x => {
    count = 0
  x.split("").forEach((curr,index,array)=>{
    if (curr==="M"){
        if (array[index-1]==="C"){
            count+=900
        } else count+=1000
    } else if (curr==="D"){
        if (array[index-1]==="C"){
            count+=400
        } else count+=500
    }  else if (curr==="C"){
        if (array[index-1]==="X"){
            count+=90
        } else if (array[index+1]!=="D"&&array[index+1]!=="M") count+=100
    } else if (curr==="L"){
        if (array[index-1]==="X"){
            count+=40
        } else count+=50
    } else if (curr==="X"){
        if (array[index-1]==="I"){
            count+=9
        } else if (array[index+1]!=="C"&&array[index+1]!=="L") count+=10
    } else if (curr==="V"){
        if (array[index-1]==="I"){
            count+=4
        } else  count+=5
    } else {
        if  (array[index+1]!=="V"&&array[index+1]!=="X") count+=1
    }
  })
  return count
}
console.log(roman("MCMXCIV"))