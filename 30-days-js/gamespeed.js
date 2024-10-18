function calculateFinalSpeed(initialSpeed, inclinations) {
    let currentSpeed = initialSpeed
    for(let i=0; i<inclinations.length; i++){
        if(inclinations[i] === 0){
            currentSpeed
        }
        else{
            if(inclinations[i] > 0){
                currentSpeed = currentSpeed - Math.abs(inclinations[i])
            }
            else{
                currentSpeed = currentSpeed + Math.abs(inclinations[i])
            }
        }
        if(currentSpeed <= 0){
            return 0
        }
    }
    return currentSpeed
  }
  
  console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0])); // 75