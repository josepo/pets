import Card from '../UI/Card';
import Button from '../UI/Button';

import css from './AddPet.module.css';

const AddPet = () =>
{
   const add = (event) =>
   {
      event.preventDefault();
   }

   return (
      <Card className={ css.input }>
         <form onSubmit={ add }>
            <label htmlFor='name'>Name</label>
            <input id='name' />

            <label htmlFor='age'>Age</label>
            <input id='age' type='number' />

            <Button type='submit'>Add pet</Button>
         </form>
      </Card>
   );
}

export default AddPet;