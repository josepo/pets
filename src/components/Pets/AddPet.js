import { useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import css from './AddPet.module.css';

const AddPet = ({ onAdd, onError }) =>
{
   const nameRef = useRef();
   const ageRef = useRef();

   const add = (event) =>
   {
      const name = nameRef.current.value;
      const age = ageRef.current.value;

      event.preventDefault();

      if ((name.trim().length === 0) || (age.trim().length === 0))
      {
         onError('Empty values not allowed');
         return;
      }

      if (+age < 1)
      {
         onError('Age must be positive');
         return;
      }

      nameRef.current.value = '';
      ageRef.current.value = '';

      onAdd({ id: Math.random().toString(), name: name, age: age });
   }

   return (
      <Card className={ css.input }>
         <form onSubmit={ add }>
            <label htmlFor='name'>Name</label>
            <input id='name' ref={ nameRef } />

            <label htmlFor='age'>Age</label>
            <input id='age' ref={ ageRef } type='number' />

            <Button type='submit'>Add pet</Button>
         </form>
      </Card>
   );
}

export default AddPet;