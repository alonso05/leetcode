function removeProperty(obj, prop) {
    let deleted = false
    // if(Object.keys(obj).find((key)=>key === prop)){  // prop in obj
    //     delete obj[prop]
    //     deleted = true
    // }
    if(prop in obj){  // prop in obj
        delete obj[prop]
        deleted = true
    }
    return deleted
  }

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    pets : {
        dog: true
    }
  };

  if(removeProperty(person, 'pets')){
    console.log('Deleted Property')
  }
  else{
    console.log('Nothing')
  }