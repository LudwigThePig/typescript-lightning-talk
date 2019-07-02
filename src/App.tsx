import React from 'react';
import logo from './logo.svg';
import './App.css';

type Cats = {
  name: string;
  image: string;
  stats?: { 
    breed: string, 
    weight: number, 
    color: string 
  };
  kittenMittens: boolean;
}

interface IAppProps {
  /* No props for this component */
}

interface IAppState {
  cats: Array<Cats>
}

class App extends React.Component <{/* where props would go */}, IAppState> {

  public static defaultProps = {
    catMultiplier: 9
  }

  constructor(props: IAppProps) {
    super(props);
      this.state = {
        cats: []
      }
  }

  public addArguments(p: number, q: string): number {
    return p + q;
  }
  render() {
    return (
      <div className="App">
        <Cats />
    </div>
  );
}
}

export default App;
