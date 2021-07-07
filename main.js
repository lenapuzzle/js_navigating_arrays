let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."

let supplyCheck = (suppliesArray) => {
    suppliesArray.forEach((supplyItem) => {
        console.log('${supplyItem} is logged and accounted for.')
    })
}

supplyCheck(supplies)

// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.

let stowSupplies = (suppliesArray) => {
    suppliesArray.forEach((supplyItem, index) => {
        let stowIndex = index + 1
        console.log(supplyItem + " is in locker " + stowIndex + ".")
            //console.log(stowIndex + ". " + supplyItem)
    })
}
stowSupplies(supplies)


// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.

let addAlphabetically = (suppliesArray) => {
    suppliesArray.push("laser pistol")
    let sortedArray = suppliesArray.sort()
    console.log(suppliesArray)
}
addAlphabetically(supplies)


// 4.) Create a function named stockCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.


let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]

let stockCheck = (inventory, mySupply) => {

    return inventory.filter(supply => {
        return !mySupply.includes(supply)
    })
}
let mis = stockCheck(inventoryChecklist, supplies)
console.log(mis)


// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your stockCheck method to help you with this.


let addMissingSupplies = (mySupply, missingSupp) => {
    let combined = []
    combined = mySupply.concat(missingSupp)

    console.log(combined)
}
addMissingSupplies(supplies, stockCheck(inventoryChecklist, supplies))