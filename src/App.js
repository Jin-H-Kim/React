import React from 'react';
import Customer from './Components/Customer';

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
  );
}

export default App;
