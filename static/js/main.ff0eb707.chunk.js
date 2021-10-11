(this["webpackJsonpunite-item-prioritization"]=this["webpackJsonpunite-item-prioritization"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),o=i(4),r=i.n(o),c=(i(13),i(5)),a=i(6),l=i(2),h=i(8),d=i(7);i(14);var j=i(0),u=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={uniteData:[],selectedPokemon:[]},n._selectPokemon=n._selectPokemon.bind(Object(l.a)(n)),n._generatePokemonNameDisplay=n._generatePokemonNameDisplay.bind(Object(l.a)(n)),n}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch("https://unite-db.com/pokemon.json").then((function(e){return e.json()})).then((function(t){e.setState({uniteData:t})}))}},{key:"_selectPokemon",value:function(e){var t=this.state.selectedPokemon,i=this.state.selectedPokemon.indexOf(e);-1!==i?t.splice(i,1):t.push(e),this.setState({selectedPokemon:t})}},{key:"_generatePokemonNameDisplay",value:function(){var e=this,t=[];return this.state.uniteData.forEach((function(i){var n=i.id,s=-1!==e.state.selectedPokemon.indexOf(n),o="https://play.pokemonshowdown.com/sprites/dex/"+i.name.replace(".","").toLowerCase()+".png";t.push(Object(j.jsx)("div",{className:"pokemon-icon "+(s?"active":""),onClick:function(){return e._selectPokemon(n)},children:Object(j.jsx)("img",{className:"select-img "+(s?"active-img":""),src:o,alt:i.name})}))})),Object(j.jsx)("div",{className:"pokemon-display",children:t})}},{key:"_generateItemPrioritizationTable",value:function(){var e=this,t=function(e){var t={},i={};e.forEach((function(e){var n=e.name,s=1/e.builds.length;e.builds.forEach((function(e){e.held_items.forEach((function(e){void 0===t[e]&&(t[e]=0),t[e]+=s,void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(n)&&i[e].push(n)}))}))}));var n=[];Object.keys(t).forEach((function(e){n.push([e,t[e]])})),n.sort((function(e,t){return t[1]-e[1]})),Object.keys(i).forEach((function(e){i[e].sort()}));var s=[];return n.forEach((function(e){var t=e[0];s.push({key:t,name:t,itemWeight:e[1],pokemonList:i[t]})})),s}(this.state.uniteData.filter((function(t){return-1!==e.state.selectedPokemon.indexOf(t.id)})));console.log(t);var i=[];return t.forEach((function(e,t){i.push(Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t+1}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.itemWeight}),Object(j.jsx)("td",{children:e.pokemonList.join(", ")})]},e.key))})),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Rank"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Weight"}),Object(j.jsx)("th",{children:"Pok\xe9mon"})]})}),Object(j.jsx)("tbody",{children:i})]})}},{key:"render",value:function(){var e=Object(j.jsx)("i",{children:"Select a Pok\xe9mon above!"});return 0!==this.state.selectedPokemon.length&&(e=this._generateItemPrioritizationTable()),Object(j.jsxs)("div",{className:"page-layout",children:[Object(j.jsx)("h1",{children:"Choose your Pok\xe9mon!"}),this._generatePokemonNameDisplay(),Object(j.jsx)("h1",{children:"Suggested Item Prioritization"}),Object(j.jsx)("div",{className:"weight-table",children:e})]})}}]),i}(n.Component);i(16);var b=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"misc",children:[Object(j.jsx)("h1",{children:"Purpose"}),Object(j.jsx)("p",{children:"The purpose of this site is to help players prioritize their item enhancers for the Pok\xe9mon they plan to play. Items that are useful on many Pok\xe9mon are given higher weighting than ones who only have a few Pok\xe9mon using them. The weighting assumes that Pok\xe9mon will be played roughly equally, so bear in mind your preferences when deciding how to use your item enhancers."}),Object(j.jsx)("h1",{children:"Explanation of Weighting"}),Object(j.jsxs)("p",{children:["Data for recommended builds taken from ",Object(j.jsx)("a",{href:"https://unite-db.com",children:"www.unite-db.com"}),". Each Pok\xe9mon's build is weighted by the total number of builds available for that Pok\xe9mon; this is to prevent Pok\xe9mon with a large number of sets from skewing the weight in their favor. These weights are aggregated across all the sets for all the chosen Pok\xe9mon, and sorted for display in a table. The more sets that use an item, the higher its weight and by extension the more highly it should be prioritized."]}),Object(j.jsx)("p",{children:"For example, suppose I want to play Blastoise, Venusaur, and Eldegoss, who have the recommended held items listed below."}),Object(j.jsxs)("ul",{style:{textAlign:"left"},children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Venusaur #1"}),": Buddy Barrier, Focus Band, Muscle Band"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Blastoise #1"}),": Buddy Barrier, Muscle Band, Score Shield"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Blastoise #2"}),": Buddy Barrier, Focus Band, Muscle Band"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Eldegoss #1"}),": Buddy Barrier, Muscle Band, Exp. Share"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Eldegoss #2"}),": Buddy Barrier, Muscle Band, Score Shield"]})]}),Object(j.jsx)("p",{children:"The weight calculations are described below."}),Object(j.jsxs)("ol",{style:{textAlign:"left"},children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Venusaur"}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:["Since Venusaur only has one set, I ",Object(j.jsx)("u",{children:"add a weight of 1 to each of Buddy Barrier, Focus Band, and Muscle Band"}),"."]})})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Blastoise"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Since Blastoise has two sets, each set provides a weight of 0.5."}),Object(j.jsxs)("li",{children:["From the first set I ",Object(j.jsx)("u",{children:"add a weight of 0.5 to each of Buddy Barrier, Muscle Band, and Score Shield"}),"."]}),Object(j.jsxs)("li",{children:["Looking to Blastoise's second set, I ",Object(j.jsx)("u",{children:"add a weight of 0.5 to each of Buddy Barrier, Focus Band, and Muscle Band"}),"."]})]})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Eldegoss"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Since Eldegoss has two sets, each set provides a weight of 0.5."}),Object(j.jsxs)("li",{children:["From the first set I ",Object(j.jsx)("u",{children:"add a weight of 0.5 to Buddy Barrier, Muscle Band, and Exp. Share"}),"."]}),Object(j.jsxs)("li",{children:["Looking to Eldegoss's second set, I ",Object(j.jsx)("u",{children:"add a weight of 0.5 to Buddy Barrier, Muscle Band, and Score Shield"})]})]})]}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{children:"Final Weights"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Buddy Barrier: Weight of 3 (1 + 0.5 + 0.5 + 0.5 + 0.5) from all 3 Pok\xe9mon"}),Object(j.jsx)("li",{children:"Muscle Band: Weight of 3 (1 + 0.5 + 0.5 + 0.5 + 0.5) from all 3 Pok\xe9mon"}),Object(j.jsx)("li",{children:"Focus Band: Weight of 1.5 (1 + 0.5) from Venusaur and Blastoise"}),Object(j.jsx)("li",{children:"Score Shield: Weight of 1 (0.5 + 0.5) from Blastoise and Eldegoss"}),Object(j.jsx)("li",{children:"Exp. Share: Weight of 0.5 (0.5) from Eldegoss"})]})]}),Object(j.jsx)("p",{children:"Without getting too bogged down by the numbers, it should be apparent that Buddy Barrier and Muscle Band are integral to all three of the Pok\xe9mon I want to play (every set for every pokemon uses them), and should be prioritized before any other items. From here, the prioriziation is a bit flexible since there are no stand-out items (the weights and number of Pok\xe9mon they come from aren't all that different)."}),Object(j.jsx)("p",{children:"Once again, it helps to bear in mind this weighting assumes the player will play the selected Pok\xe9mon roughly equally; if I were plannig to play Eldegoss 90% of the time I should prioritize the items that Eldegoss benefits from, even if they have lower overall weight."})]})]})},m=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),n(e),s(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.ff0eb707.chunk.js.map