import PageLayout from './src/pageLayout';
import './App.css';

function App() {
  return (
    <div className="App">
        <PageLayout />
        <div className="misc">
          <h1>Purpose/Explanation of Weighting</h1>
          <p>
            The purpose of this site is to help players prioritize their item enhancers for the Pok&eacute;mon they plan to play.
            Items that are useful on many Pok&eacute;mon are given higher weighting than ones who only have a few Pok&eacute;mon using them.
          </p>
          <p>
            Data for recommended builds taken from <a href="https://unite-db.com">www.unite-db.com</a>. 
            Each Pok&eacute;mon's build is weighted by the total number of builds available for that Pok&eacute;mon (if Venusaur has 2 builds, then each build's items would contribute weight of 0.5); this is to prevent Pok&eacute;mon with a large number of sets from skewing the weight in their favor.
            These weights are aggregated across all the sets for all the chosen Pok&eacute;mon, and sorted for display in a table.
          </p>
        </div>
    </div>
  );
}

export default App;
