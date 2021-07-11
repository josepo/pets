const AddPet = () =>
{
   const add = (event) =>
   {
      event.preventDefault();
   }

   return (
      <form onSubmit={ add }>
         <label htmlFor='name'>Name</label>
         <input id='name'></input>

         <label htmlFor='age'>Age</label>
         <input id='age' type='number'></input>

         <button type='submit'>Add pet</button>
      </form>
   );
}

export default AddPet;