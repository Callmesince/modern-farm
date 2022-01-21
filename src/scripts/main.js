console.log("Welcome to the main module")


// importing the create plan function from plan.js
// this will give me 3 random arrays "rows" with 6 random strings "plants"

import { createPlan } from './plan.js'

// defining a variable whos value is the creat plan function
const yearlyPlan = createPlan()

// console logging yearlyPlan to see the returned arrays
console.log(yearlyPlan)

// importing my createAspagus function to be used in main.js
// import { createAsparagus } from "./seeds/asparagus.js"
// import { createSoybean } from "./seeds/soybean.js"


// importing the add plant function to be used in main.js
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createAsparagus } from './seeds/asparagus.js'

// declaring a variable whos value is the createAsparagus function
const asparagusSeed = createAsparagus()

// declaring a variable whos value is the addPlant function.
// inserting the asparagusSeed variable as the parameter for addPlant
const addedPlant = addPlant(asparagusSeed)

// declaring a variable whos value is the output of 
// usePlants function
// let plantUsed = usePlants()

// console logging plants used to check to see
// if my functions are working properly
// console.log(plantUsed)

// invoking the plantSeeds function

plantSeeds(yearlyPlan)

// console.log(usePlants())

// import harvestPlants function from harvester.js
import { harvestPlants } from './harvester.js'

// create a variable whose value is invoking harvest plants function 
// with usePlants as the argument

const harvestTime = harvestPlants(usePlants())

console.log(usePlants())

console.log(harvestTime)


// import and inoke the catalog function 
// and pass the harvestTime variable as its argument

import { catalog } from './catalog.js'

catalog(harvestTime)

