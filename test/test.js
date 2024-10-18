// let counter = 0

// function usageCount(bridge) {
//     let newBridge = []
//     for(let i=0; i<bridge.length; i++){
//         const result = bridge[i] - 2
//         if(result === 0){
//             return counter
//         }
//         else{
//             if(result>0){
//                 newBridge.push(result)
//             }
//             if(newBridge.length === bridge.length){
//                 counter++
//             }
//         }

//     }
//     return usageCount(newBridge)
//   }

function usageCount(bridge){
    let counter = 0

    while(true){
        if(bridge.some((block) => block <= 0)){
            break;
        }

        bridge = bridge.map(block => block -2)
        if(bridge.some((block) => block <= 0)){
            break;
        }else{
            counter++
        }
    }
    return counter
}
  
  const bridge = [7, 6, 5, 8]; // -2 each time
  console.log(usageCount(bridge)); // Should print 2