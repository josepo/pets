import { useState } from 'react';

import AddPet from './components/Pets/AddPet';
import Pets from './components/Pets/Pets';

function App() {
   const [pets, setPets] = useState([]);

   const add = (pet) => { 
      setPets(pets => [...pets, pet]); 
   }

   return (
      <>
         <AddPet onAdd={ add }/>
         <Pets pets={ pets }/>
      </>
   );
}

export default App;
