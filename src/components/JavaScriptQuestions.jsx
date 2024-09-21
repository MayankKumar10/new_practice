import React from 'react'

export const JavaScriptQuestions = () => {

  let TwoSums = (arr, num) =>{
    let newArray = new Map()

    for(let i=0; i< arr.length; i++){
      let remaining = num - arr[i]

      if(newArray.has(remaining)){
        return [newArray.get(remaining), i]
      }
      newArray.set(arr[i], i)
    }
    return []
  }

  console.log("TwoSums", TwoSums([1,2,3,4,5,6,7,8,9], 10))

  let arrArrayOfSums = (arr, num) =>{
    let newArray = []

    for(let i=0; i < arr.length; i++){
      for(let j=i+1; j < arr.length; j++){
        num === arr[i] + arr[j] ? newArray.push([i,j]) : newArray
      }
    }
  
    return newArray
  }

  console.log("arrArrayOfSums", arrArrayOfSums([1,2,3,4,5,6,7,8,9], 10))


  let flatMap = (arr, depth=1) => {
    let arrNew = []

    for(let i=0; i< arr.length; i++){
      if(Array.isArray(arr[i]) && depth >= 1 ){
        arrNew = arrNew.concat(flatMap(arr[i], depth-1))
      } else {
        arrNew.push(arr[i])
      }
    }

    return arrNew
  }

  console.log("flatMap", flatMap([1,[2,[3,[4,5,6],7],8]]), 1)

  return (
    <div>
      <h4>JavaScriptQuestions</h4>
    </div>
  )
}
