import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
//This function defines the rock,paper, scissors game that the user will use in the game. It specifies what happens betwween Bob and Alice(the names described before, and then records who won the game to determne the smart contracts.

(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  const HAND = ['Rock', 'Paper', 'Scissors'];
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
  const Player = (Who) => ({
    getHand: () => {
      const hand = Math.floor(Math.random() * 3);
      console.log(`${Who} played ${HAND[hand]}`);
      return hand;
    },
    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
  });

  await Promise.all([
    backend.Alice(
      ctcAlice,
      Player('Alice'),
    ),
    backend.Bob(
      ctcBob,
      Player('Bob'),
    ),
  ]);
})();