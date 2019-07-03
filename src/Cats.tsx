import React from 'react';
import {Cats} from './App';

interface ICatProps {
  arrayOfCats: Array<Cats>
}

const CatsContainer = ( { arrayOfCats }: ICatProps ) => (
  <div className="cats">
    {arrayOfCats.map((cat: Cats) => <Cat {...cat} />)}
  </div>
)


const Cat = (cat : Cats) => (
  <div className="cat">
    <h3>{cat.name}</h3>
    <img src={cat.image} alt='cat in a box'></img>


  </div>
)


export default CatsContainer;