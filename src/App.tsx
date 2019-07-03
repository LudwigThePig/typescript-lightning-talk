import React from 'react';
import logo from './logo.svg';
import './App.css';
import apiKey from './apiKey';
import CatsContainer from './Cats';
import { randomCatName } from './catHelperFunction';

export type Cats = {
  name: string;
  image: string;
  stats?: { 
    breed: string, 
    weight: number, 
    color: string 
  };
  kittenMittens: boolean;
}
type fetchedCat = {url: string}

interface IAppProps {
  /* No props for this component */
}

interface IAppState {
  cats: Array<Cats>
}

class App extends React.Component <{/* where props would go */}, IAppState> {

  public static getCats() {
    return fetch(apiKey)
      .then(res => res.json())  
      .then(data => data)
      .catch(console.log) 
  }

  constructor(props: IAppProps) {
    super(props);
      this.state = {
        cats: []
      }
      this.herdCats = this.herdCats.bind(this);
  }

  public wrangleCats(catStream: Array<fetchedCat>): Array<Cats> {
    let wrangled = catStream.map((cat: fetchedCat) => {
      return {
        name: randomCatName(),
        image: cat.url,
        kittenMittens: Math.random() < 0.5,

      }
    });
    return wrangled;
  }

  private herdCats(cats: Array<Cats>): void {
    this.setState({
      cats: cats
    })
  }

  componentDidMount() {
    App.getCats()
      .then(this.wrangleCats)
      .then(this.herdCats)
  }

  render() {
    const { cats } = this.state;
    return (
      <div className="App">
        <CatsContainer arrayOfCats={cats} />
    </div>
  );
}
}

export default App;
