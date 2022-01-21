// defining and exporting a function that returns an array of seed objects
// the function accepts the field array as its parameter
// the function will itterate the field array and access the output property
// of each item in the array
// the function will add as many of each plant as the output to the new array



export const harvestPlants = (fieldArray) => {
    const newArray = []

    for (const plant of fieldArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
            newArray.push(plant)
            }
        }
            else {
            for (let i = 0; i < plant.output; i++) {
                newArray.push(plant)}
        }

        
    }

    return newArray
}

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
