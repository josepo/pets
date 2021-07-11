import Card from '../UI/Card';

import css from './Pets.module.css';

const Pets = ({ pets }) => 
{
   return (
      <Card className={ css.pets }>
         <ul>
         {
            pets.map(pet => <li key={ pet.id }>{ pet.name } ({ pet.age }) </li>)
         }
         </ul>
      </Card>
   );
}

export default Pets;