
import React from 'react';
import data from './data';
console.log("test#3")
const {users, companies} = data;

console.log(companies);

function App() {
  const foo = 'bar';
  console.log("test#4")
  return (
    <div>
      <h1> Hello World!! {foo.toUpperCase()}</h1>
        {
          users.map(user => {
            return(
              <li key={user.id} >
                {user.name} from: {user.state}
              </li>
            );
          })
        }
      <hr/>
    </div>
  );
}

export default App;
