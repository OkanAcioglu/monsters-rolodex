import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   monster1: {
    //     name: 'Linda',
    //   },
    //   monster2: {
    //     name: 'Frank',
    //   },
    //   monster3: {
    //     name: 'Jacky',
    //   },
    // }
    this.state = {
      monsters: [
        {
          name: 'Linda',
        },
        {
          name: 'Frank',
        },
        {
          name: 'Jacky',
        },
        {
          name: 'Andrei',
        },
      ],
    }
  }
  render() {
    return (
      <div className='App'>
        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}
        {/* Above Code is really repetative */}
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>
        })}
      </div>
    )
  }
}

export default App
