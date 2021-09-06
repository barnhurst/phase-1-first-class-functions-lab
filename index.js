const driver = ['Sally', 'Bob', 'Freddy', 'Claudia']
const arrayOfDrivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
let returnFirstTwoDrivers = function(driver){
    return  driver.slice(0,2);

}

let returnLastTwoDrivers = function(driver){
    return  driver.slice(-2);

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {

return function(price) {
    return price * x 
}}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

let  selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
        return returnFirstTwoDrivers(arrayOfDrivers)
}
