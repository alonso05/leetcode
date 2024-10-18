function calculateFinalSpeed(initialSpeed, inclinations) {
    function modifySpeed(speed, inclination){
        if(inclination > 0){
            return speed - Math.abs(inclination)
        }else if(inclination < 0){
            return speed + Math.abs(inclination)
        }
        else
            return speed
    }
    let finalSpeed = inclinations.reduce((prev, current) => modifySpeed(prev, current), initialSpeed)
    if(finalSpeed <= 0)
        finalSpeed = 0
    
    return finalSpeed
  }
  
  console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));