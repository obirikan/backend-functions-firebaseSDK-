
const TestFormu2 = (array,contraints=[],toform=1,isSpan=false,spanType=3) => {
    if(isSpan){
       const selected_num = array[0];
       const total = selected_num.map((number=>span(number,spanType))).reduce((a,b)=>a+b) // 
       return total; // total number of span bets
    }else{
      if(array.length === 1 || array.length > 2){
        const multiple_numbers  = []
        array.map((selection,index)=>{
          let combinations_of_rows = getCombinations(selection,contraints[index])
          multiple_numbers.push(combinations_of_rows.length)
        })
        return multiple_numbers.reduce((accumulator,currentValue)=>accumulator * currentValue) * toform
      }else{
        if (array.length === 2) {
          let combinations_of_row1 = getCombinations(array[0],contraints[0])
          let combinations_of_row2 = getCombinations(array[1],contraints[1])
          if(contraints[0] > contraints[1]){
            return mergeAndCheck2(combinations_of_row2,combinations_of_row1).length * toform;
          }else{
            return mergeAndCheck2(combinations_of_row1,combinations_of_row2).length * toform;
          }
        }
      }
    }
  };