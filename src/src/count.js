export function weightItemUsage(pokemonData) {
    // pokemonData is an sub-array of the pokemon-DB one with only chosen Pokemon
    const itemWeights = {}
    const itemPokemonMapping = {}
    pokemonData.forEach(datum => {
        // Weight inversely by number of sets a pokemon has
        // if lots of viable items then each has low weight
        const pokemonName = datum.name
        const weightFactor = 1 / datum.builds.filter((obj) => {return obj.name !== ""}).length;
        datum.builds.forEach(buildDatum => {
            let optionalItem = false;
            let held_items = JSON.parse(JSON.stringify(buildDatum.held_items))
            if(Object.keys(buildDatum).indexOf("buildDatum") !== -1 & buildDatum.held_items_optional !== "") {
                optionalItem = true
                // Add the items; optional replaces last one
                held_items.push(
                    buildDatum.held_items_optional, ...held_items
                )
                held_items.splice(-1)
            }

            held_items.forEach(heldItem => {
                // set the weights
                if (itemWeights[heldItem] === undefined) {
                    itemWeights[heldItem] = 0
                }
                itemWeights[heldItem] += weightFactor * (optionalItem ? 0.5: 1)

                // add the pokemon
                if (itemPokemonMapping[heldItem] === undefined) {
                    itemPokemonMapping[heldItem] = []
                }
                if (itemPokemonMapping[heldItem].indexOf(pokemonName) === -1) {
                    itemPokemonMapping[heldItem].push(pokemonName)
                }
            }) 
        })
    })

    // Sort the item weight by the number of sets that have it
    const itemWeightArray = []
    Object.keys(itemWeights).forEach(itemName => {
        itemWeightArray.push([itemName, itemWeights[itemName]]);
    })
    itemWeightArray.sort(function (a, b) {return b[1] - a[1]; })

    // Sort the pokemon names in the item-pokemon mapping
    Object.keys(itemPokemonMapping).forEach(itemName => {
        itemPokemonMapping[itemName].sort()
    })

    const output = []
    // Final data construction; list of objects
    itemWeightArray.forEach(datum => {
        const itemName = datum[0]
        output.push({
            key: itemName,
            name: itemName,
            itemWeight: datum[1],
            pokemonList: itemPokemonMapping[itemName]
        })
    })

    return output
}