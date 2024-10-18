function getSpottingMetrics(measurments){

    let minAvg = Infinity

    for(let i=0; i<=measurments.length - 3; i++){
        if(measurments[i] ===0 || measurments[i+1] === 0 || measurments[i+2] === 0){
            continue
        }
        const avg = (measurments[i] + measurments[i+1] + measurments[i+2]) / 3

        if(avg < minAvg){
            minAvg = avg
        }
    }
 
    return minAvg === Infinity ? null : minAvg

}

console.log(getSpottingMetrics([2,1,3,0,1,5,0,0,6,7])) //should return 1.66667