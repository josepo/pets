import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import css from './AddPet.module.css';

const AddPet = () =>
{
   const [name, setName] = useState('');
   const [age, setAge] = useState('');

   const add = (event) =>
   {
      event.preventDefault();

      if ((name.trim().length === 0) || (age.trim().length === 0))
         return;

      if (+age < 1)
         return;

      setName('');
      setAge('');
   }

   return (
      <Card className={ css.input }>
         <form onSubmit={ add }>
            <label htmlFor='name'>Name</label>
            <input id='name' value={ name } onChange={ e => { setName(e.target.value); }} />

            <label htmlFor='age'>Age</label>
            <input id='age' value={ age } onChange={ e => { setAge(e.target.value); }} type='number' />

            <Button type='submit'>Add pet</Button>
         </form>
      </Card>
   );
}

export default AddPet;