import Card from '../UI/Card';
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
            <input id='name'></input>

            <label htmlFor='age'>Age</label>
            <input id='age' type='number'></input>

            <button type='submit'>Add pet</button>
         </form>
      </Card>
   );
}

export default AddPet;