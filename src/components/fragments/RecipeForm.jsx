import { useState } from 'react';

const RecipeForm = () => {
  const [value, setValue] = useState('');
  return (
    <form>
      <input type='text' onChange={(e) => console.log(e.target.value)} />
      <select name='' id=''>
        <option value=''>Kg</option>
        <option value=''>gram</option>
      </select>
      <div>
        <button type='submit'>Add Ingredient</button>
      </div>
    </form>
  );
};

export default RecipeForm;
