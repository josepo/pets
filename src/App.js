import { useState } from 'react';

import AddPet from './components/Pets/AddPet';
import Pets from './components/Pets/Pets';
import ErrorModal from './components/UI/ErrorModal';

function App() {
   const [pets, setPets] = useState([]);
   const [error, setError] = useState('');

   const add = (pet) => { 
      setPets(pets => [...pets, pet]); 
   }

   return (
      <>
         <AddPet onAdd={ add } onError={ msg => { setError(msg); }} />
         <Pets pets={ pets }/>
         { error && <ErrorModal msg={ error } onClose={ () => { setError('') }} /> }
      </>
   );
}

export default App;
