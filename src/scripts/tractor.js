// importing all my create seeds functions to be accessed 
// by my plantSeeds function

import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"


// defining and exporting a function that accepts 
// the year plan as an input. 
// using the function to iterate the year plan and 
// its child arrays of the rows.

export let plantSeeds = (yearPlan) => {
 for (const plan of yearPlan) {
     for (const plant of plan) {

        // as the function iterates, it will invoke
        // the appropriate seed function with its corresponding
        // plant on the plan array

         if ( plant === "Asparagus") {

            addPlant(createAsparagus())
         }
         else if ( plant === "potato") {
            addPlant(createPotato())
         }

         else if ( plant === "Soybean") {
            addPlant(createSoybean())
         }

         else if ( plant === "Sunflower") {
            addPlant(createSunflower())
         }

         else if ( plant === "Wheat") {
            addPlant(createWheat())
         }
        //  the corn function will have to access
        // the multiple objects in the corn array
        // and decide between them

         else if ( plant === "Corn") {
           const plantAdd = createCorn()
            addPlant(plantAdd[0])
            addPlant(plantAdd[1])
            
         }
        
     }

 }
}


