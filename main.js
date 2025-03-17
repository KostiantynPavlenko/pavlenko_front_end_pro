const person = {
  name: "Kostya",
  age: 23,
  city: "Odesa",
  showInfo(){
    Object.entries(this).forEach(([key, value]) => {
      if (typeof value !== 'function'){
        console.log(`${key}: ${value}`);
      }
    })
  }
}

person.showInfo()