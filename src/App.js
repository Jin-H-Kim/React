import React from 'react';
import Customer from './Components/Customer'
// import logo from './logo.svg';
// import './App.css';

const user = {
  id : 1,
  img : 'https://placeimg.com/64/64/any', 
  name : '김진혁',
  birthday : '811018',
  gender : '남자',
  job : '퍼블리셔'
}
function App() {
  return (
    <Customer id={user.id} name={user.name} />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Start React <br />
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
