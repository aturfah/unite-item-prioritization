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
            Data for recommended builds taken from <a href="https://unite-db.com">www.unite-db.com</a>. 
          </p>
          <p>
            Each Pok&eacute;mon's build is weighted by the total number of builds available for that Pok&eacute;mon; this is to prevent Pok&eacute;mon with a large number of sets from skewing the weight in their favor.
            These weights are aggregated across all the sets for all the chosen Pok&eacute;mon, and sorted for display in a table. The more sets that use an item, the higher its weight and by extension the more highly it should be prioritized.
          </p>
          <p>
            For example, suppose I want to play Blastoise, Venusaur, and Eldegoss, who have the recommended held items listed below.
            <ul style={{"text-align":"left"}}>
              <li><b>Venusaur #1</b>: Buddy Barrier, Focus Band, Muscle Band</li>
              <li><b>Blastoise #1</b>: Buddy Barrier, Muscle Band, Score Shield</li>
              <li><b>Blastoise #2</b>: Buddy Barrier, Muscle Band, Focus Band</li>
              <li><b>Eldegoss #1</b>: Buddy Barrier, Muscle Band, Exp. Share</li>
              <li><b>Eldegoss #2</b>: Buddy Barrier, Muscle Band, Score Shield</li>
            </ul>
            The weight calculations are described below.
            <ol style={{"text-align":"left"}}>
              <li><b>Venusaur</b>
                <ul>
                  <li>Since Venusaur only has one set, I <u>add a weight of 1 to each of Buddy Barrier, Focus Band, and Muscle Band</u>.</li>
                </ul>
              </li>
              <li>
                <b>Blastoise</b>
                <ul>
                  <li>Since Blastoise has two sets, each set provides a weight of 0.5.</li>
                  <li>From the first set I <u>add a weight of 0.5 to each of Buddy Barrier, Muscle Band, and Score Shield</u>.</li>
                  <li>Looking to Blastoise's second set, I <u>add a weight of 0.5 to each of Buddy Barrier, Muscle Band, and Focus Band</u>.</li>
                </ul>
              </li>
              <li><b>Eldegoss</b>
              <ul>
                  <li>Since Eldegoss has two sets, each set provides a weight of 0.5.</li>
                  <li>From the first set I <u>add a weight of 0.5 to Buddy Barrier, Muscle Band, and Exp. Share</u>.</li>
                  <li>Looking to Eldegoss's second set, I <u>add a weight of 0.5 to Buddy Barrier, Muscle Band, and Score Shield</u></li>
                </ul>
              </li>
              <li>
                <i>Final Weights</i>
              </li>
              <ul>
                <li>Buddy Barrier: Weight of 3 (1 + 0.5 + 0.5 + 0.5 + 0.5) from all 3 Pok&eacute;mon</li>
                <li>Muscle Band: Weight of 3 (1 + 0.5 + 0.5 + 0.5 + 0.5) from all 3 Pok&eacute;mon</li>
                <li>Focus Band: Weight of 1.5 (1 + 0.5) from Venusaur and Blastoise</li>
                <li>Score Shield: Weight of 1 (0.5 + 0.5) from Blastoise and Eldegoss</li>
                <li>Exp. Share: Weight of 0.5 (0.5) from Eldegoss</li>
              </ul>
            </ol>
            Without getting too bogged down by the numbers, it should be apparent that Buddy Barrier and Muscle Band are integral to all three of the Pok&eacute;mon I want to play (every pokemon has a set that uses them), and should be prioritized before any other items. From here, the prioriziation is a bit flexible since there are no stand-out items (the weights and number of Pok&eacute;mon they come from aren't all that different).This also assumes the player will play these Pok&eacute;mon roughly equally; if I were to play Eldegoss 90% of the time I should prioritize the items that Eldegoss benefits from, even if they have lower overall weight.
          </p>
        </div>
    </div>
  );
}

export default App;
