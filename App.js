
import React from 'react';
import data from './data';
console.log("test#3")
const {users, companies} = data;

console.log(companies);

const companiesByState = companies.reduce((acc,company) => {
  acc[company.state] = acc[company.state] || [];
  acc[company.state].push(company);
  return acc;
}, {})
console.log(companiesByState);
function App() {
  const foo = 'bar';
  console.log("test#4")
  return (
    <div>
      <h1> Hello World!! {foo.toUpperCase()}</h1>
       <ul>
         {
           Object.entries(companiesByState).map(entry => {
             return (
               <li key= {entry[0]}>
                 {entry[0]}
                 ({entry[1].length})
               </li>
             )
           })
         }
       </ul>

        {
          users.map(user => {

            return(
              <li key={user.id} >
                {user.name} from: {user.state}
                works for  { companies.find(company =>company.id === user.CompanyId).name}
              </li>
            );
          })
        }
      <hr/>
    </div>
  );
}

export default App;
