import React, {Component} from "react";
import { weightItemUsage } from "./count";
import '../css/pageLayout.css';


class PageLayout extends Component {
    constructor(props) {
        super(props);

        // Get everything set up
        this.state = {
            uniteData: [],
            selectedPokemon: []
        }

        // Bind Functions
        this._selectPokemon = this._selectPokemon.bind(this);
        this._generatePokemonNameDisplay = this._generatePokemonNameDisplay.bind(this);
        this._resetPokemon = this._resetPokemon.bind(this);
    }

    componentDidMount() {
        fetch("https://unite-db.com/pokemon.json").then(resp => {
            return resp.json();
        }).then((uniteData) => {
            this.setState({
                uniteData: uniteData
            })
        })
    }

    _resetPokemon() {
        this.setState({selectedPokemon: []})
    }

    _selectPokemon(pokeID) {
        const newSelPokemon = this.state.selectedPokemon;
        const pokeIDIdx = this.state.selectedPokemon.indexOf(pokeID);
        if (pokeIDIdx !== -1) {
            newSelPokemon.splice(pokeIDIdx, 1)
        } else {
            newSelPokemon.push(pokeID);
        }
        this.setState({
            selectedPokemon: newSelPokemon
        })
    }

    _generatePokemonNameDisplay() {
        const pokemonDisplay = []
        this.state.uniteData.forEach((value) => {
            const pokeID = value["id"]
            const activePoke = (this.state.selectedPokemon.indexOf(pokeID) !== -1)
            // Get the sprite
            let imgSrc = "https://play.pokemonshowdown.com/sprites/gen5/" + value["name"].replace(".", "").toLowerCase()
            if (value["name"] === "Ninetales") {
                imgSrc += "-alola"
            }
            imgSrc += ".png"

            // If a pokemon has no sets, grayscale and not clickable
            let soonPoke = false;
            if (value.builds[0].soon === "True") {
                soonPoke = true
            }

            pokemonDisplay.push(
                <div className={"pokemon-icon " + (activePoke ? "active " : "") }
                    onClick={() => (soonPoke ? alert("No set data for " + value["name"]) : this._selectPokemon(pokeID))}>
                        <img className={"select-img " + (activePoke ? "active-img" : "") + (soonPoke ? "soon-pkmn" : "")}
                            src={imgSrc} alt={value["name"]}/>
                    </div>
            )
        })
        return <div className="pokemon-display">{pokemonDisplay}</div>
    }

    _generateItemPrioritizationTable() {
        const pokemonData = this.state.uniteData.filter((datum) => {
            // Only want to count items for pokemon who are chosen
            return this.state.selectedPokemon.indexOf(datum["id"]) === -1 ? false : true
        })
        const itemWeightData = weightItemUsage(pokemonData)
        // console.log(itemWeightData)

        const itemWeightRows = []
        itemWeightData.forEach((datum, idx) => {
            itemWeightRows.push(<tr key={datum.key}>
                <td className="weight-table-cell">{idx + 1}</td>
                <td className="weight-table-cell">{datum.name}</td>
                <td className="weight-table-cell">{datum.itemWeight.toFixed(2)}</td>
                <td className="weight-table-cell">{datum.pokemonList.length}</td>
                <td className="weight-table-cell name-cell">{datum.pokemonList.join(", ")}</td>
            </tr>)
        })

        return <table>
                <thead>
                    <tr>
                        <th className="weight-table-cell">Rank</th>
                        <th className="weight-table-cell">Name</th>
                        <th className="weight-table-cell">Weight</th>
                        <th className="weight-table-cell"># Pok&eacute;mon</th>
                        <th className="weight-table-cell name-cell">Pok&eacute;mon Names</th>
                    </tr>
                </thead>
                <tbody>
                    {itemWeightRows}
                </tbody>
            </table>
        
    }

    render() {
        let itemTable = <i>Select a Pok&eacute;mon above!</i>
        if (this.state.selectedPokemon.length !== 0) {
            itemTable = this._generateItemPrioritizationTable()
        }
        return <div className="page-layout">

            <div>
                <div className="left-col">
                    <h1>Choose your Pok&eacute;mon!</h1>
                    <div>
                        <button className="reset-button" onClick={this._resetPokemon}>Reset Selection</button>
                    </div>
                    {this._generatePokemonNameDisplay()}
                </div>
                <div className="right-col">
                    <h1>Suggested Item Prioritization</h1>
                    <div className="weight-table">
                        {itemTable}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default PageLayout;