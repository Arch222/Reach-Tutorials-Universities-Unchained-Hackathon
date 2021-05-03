import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
//Imports required backend and standard libaries
//Following code defines contracts and accounts for Bob/Alice respectively, thus allowing them to deploy
//Alice deploys the program, Bob attaches it.
     
async () => {
	const stdlib = await loadStdlib();
	const startingBalance = stdlib.parseCurrency(10);
     
	const accAlice = await stdlib.newTestAccount(startingBalance);
	const accBob = await stdlib.newTestAccount(startingBalance);
    
	const ctcAlice = accAlice.deploy(backend);
	const ctcBob = accBob.attach(backend, ctcAlice.getInfo());
    
     await Promise.all([
        backend.Alice(
          ctcAlice,
          {},
        ),
        backend.Bob(
          ctcBob,
          {},
        ),
      ]);
   })(); // These are importnt as they end the program