import React from 'react';
import Customer from './Components/Customer';

// const users = [
//   {
//     id : 1,
//     img : 'https://placeimg.com/64/64/1', 
//     name : '김진혁1',
//     birthday : '811018',
//     gender : '남자',
//     job : '퍼블리셔'
//   },
//   {
//     id : 2,
//     img : 'https://placeimg.com/64/64/2', 
//     name : '김진혁2',
//     birthday : '811018',
//     gender : '남자',
//     job : '퍼블리셔'
//   },
//   {
//     id : 3,
//     img : 'https://placeimg.com/64/64/3', 
//     name : '김진혁3',
//     birthday : '811018',
//     gender : '남자',
//     job : '퍼블리셔'
//   }
// ]

class App extends React.Component{
  state ={
    users : ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({users: res}))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    return (
      <div>
        <div>
          {this.state.users ? this.state.users[0].name : ""}
        </div>
        <div>
          {this.state.users ? this.state.users.map(u => {
            return(
              <Customer 
                key={u.id}
                id={u.id}
                name={u.name}
                img={u.img}
                birthday={u.birthday}
                gender={u.gender}
                job={u.job}
              />
            )
          }): ""}
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div>
//       {users.map(u => {
//         return(
//           <Customer 
//             key={u.id}
//             id={u.id}
//             name={u.name}
//             img={u.img}
//             birthday={u.birthday}
//             gender={u.gender}
//             job={u.job}
//            />
//         )
//       })}
//     </div>
//   );
// }

export default App;
