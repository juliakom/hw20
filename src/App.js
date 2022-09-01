import cat from './cat.jpg';
import './App.css';
import React from 'react';

const style = {
  block: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '50px',
    border: '2px solid white',
  },
  element: {
    paddingBottom: '20px',
  }
}

function Greetings(props) {
  return (
    <div style={style.block}>
      <h1>Hello, {props.name}!</h1>
      <img src={cat} className="cat" alt="cat" />
    </div>
  )
}

class Info extends React.Component {
  render() {
    return ( 
      <div className='card' style={style.block}>
        <img className="img" style={style.element}
          src={this.props.src}
          alt={this.props.name}
        />
        <span className='img-name' style={style.element}>
          {this.props.name}
        </span>
        <span className='date' style={style.element}>
          {new Date().toLocaleDateString()}
        </span>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings name = 'World'></Greetings>
        <Info 
          src = 'https://www.petrebels.com/wp-content/uploads/2021/05/Maine-Coon-1-S_0.jpg' 
          name = 'MaineCoon'>
        </Info>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;