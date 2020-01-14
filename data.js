import faker from 'faker';

const users = [];
const companies = [];

console.log("test#2")

while(companies.length < 10){
  users.push({
    name: faker.company.companyName(),
    id: companies.length +1,
    state: faker.address.state()
  })
  console.log( companies.length);
}
console.log("test #3")

while(users.length < 100){
  users.push({
    name: faker.name.firstName(),
    id: users.length +1,
    state: faker.address.state()
  })
}
console("test#4")

const data = {
  users,
  companies
}
export default data;
