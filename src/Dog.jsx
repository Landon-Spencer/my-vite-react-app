import { useState, useEffect } from 'react';

const URL = 'https://dog.ceo/api/breeds/image/random';

const Dog = () => {
  const [dog, setDog] = useState(null);
  const [isNewDog, setIsNewDog] = useState(false);

  const changeDog = () => setIsNewDog(!isNewDog);

  useEffect (() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setDog(data.message)
        })
  },[isNewDog]);

  return (<>
    <div>
      <button onClick={changeDog}>Click for random dog</button>
    </div>
    <div>
      <img src={dog} alt='dog image' style={{'width': '400px'}}/>
    </div>
  </>
  )
}

export default Dog;