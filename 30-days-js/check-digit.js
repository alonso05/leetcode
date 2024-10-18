function createCheckDigit(membershipId) {

    const sumatory = (prev, current) => prev + parseInt(current)
    let sum = membershipId.split('').reduce(sumatory, 0)

    if(sum < 10){
        return sum
    }
    else{
        return createCheckDigit(sum.toString())
    }
    
  }
  
  console.log(createCheckDigit("55555"));