// Code your solution here
//Using the Array filter method

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers,string){
    const name = drivers.filter (driversName => driversName.toLowerCase() === string.toLowerCase())
    return name
}
function fuzzyMatch (drivers,string){
    const name = drivers.filter (driversName.startWith(string))
    return name
}
function matchName (drivers, string){
    const name = drivers.filter (driversName => driversName.match)
    return name
}

  
  






