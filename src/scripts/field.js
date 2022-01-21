// creating a variable whos value is an empty array. 
// this array is to store all plants growing in the field.

const field = []

// creating a function that accepts a seeds object as its parameter
// the function will add the inputed seed to the field array

export const addPlant = (seedObj) => {

    field.push(seedObj);

}

// creating and exporting a function that will 
// return a copy of the field

export const usePlants = () => {
    return field.map(plant => ({...plant}))
}





