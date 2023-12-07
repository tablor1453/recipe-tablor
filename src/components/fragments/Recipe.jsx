import { useRef, useState } from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { uid } from 'uid';

const maxIngredients = 5;

const Recipe = () => {
  const [ingredients, setingredients] = useState([]);
  const inputRef = useRef(null);
  const [isShowed, setIsShowed] = useState(false);

  const addIngredients = () => {
    let newData = [...ingredients];
    setIsShowed(true);

    if (ingredients.length < maxIngredients) {
      newData.push({
        id: uid(),
      });
      setingredients(newData);

      return;
    }
    console.info('Jumlah bahan maksimal ' + maxIngredients);
    return;
  };

  const removeIngredients = (idIngredient) => {
    let data = [...ingredients];
    let filterData = data.filter(
      (ingredient) => ingredient.id !== idIngredient,
    );

    setingredients(filterData);
    console.info('remove ingredients  ' + idIngredient);
    return;
  };

  function handleSaveReciep(e) {
    e.preventDefault();
    const dataInput = inputRef.current.children;
    let updateIngredient = [];

    for (let element of dataInput) {
      updateIngredient.push({
        id: element.children[0].name,
        name: element.children[0].value,
      });
    }
    setingredients([]);
    console.log(ingredients);
    setIsShowed(false);
  }

  return (
    <>
      <Button onClick={() => addIngredients()}>Tambah Bahan</Button>
      <hr />
      {isShowed ? (
        <form>
          <div ref={inputRef}>
            {ingredients.map((ingredient) => {
              return (
                <div key={ingredient.id}>
                  <Input name={ingredient.id} />
                  <span>
                    <Button onClick={() => removeIngredients(ingredient.id)}>
                      -
                    </Button>
                  </span>
                </div>
              );
            })}
          </div>
          {ingredients.length != [] ? (
            <Button type='submit' onClick={handleSaveReciep}>
              Simpan
            </Button>
          ) : (
            ''
          )}
        </form>
      ) : (
        ''
      )}

      {ingredients.length == []
        ? 'belum ada bahan'
        : ingredients.map((ingredient) => (
            <p key={ingredient.id}>{ingredient.name}</p>
          ))}
    </>
  );
};

export default Recipe;
