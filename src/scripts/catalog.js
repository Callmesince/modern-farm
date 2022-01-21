
// define and export a function called catalog
// make the harvested foods array the argument

export const catalog = (harvestArray) => {

    // the function should iterate the harvested foods array
        let plantString = ""

    for (const plant of harvestArray) {
        if (plant.type === "Asparagus") {
            plantString += `<section class="plant">Asparagus</section>`
        }

        else if (plant.type === "Potato") {
            plantString += `<section class="plant">Potato</section>`
        }

        else if (plant.type === "Soybean") {
            plantString += `<section class="plant">Soybean</section>`
        }

        else if (plant.type === "Sunflower") {
            plantString += `<section class="plant">Sunflower</section>`
        }

        else if (plant.type === "Wheat") {
            plantString += `<section class="plant">Wheat</section>`
        }

        else if (plant.type === "Corn") {
            plantString += `<section class="plant">Corn</section>`
        }
    }
     console.log(plantString)
     
    document.querySelector(".container").innerHTML += plantString
}

