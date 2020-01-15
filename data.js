import faker from 'faker';

const users = [];
const companies = [];

console.log("test#2");


while(companies.length < 20){
  companies.push({
    name: faker.company.companyName(),
    id: companies.length +1,
    state: faker.address.state()
  })

}


while(users.length < 100){
  users.push({
    name: faker.name.firstName(),
    id: users.length +1,
    state: faker.address.state(),
    CompanyId: faker.random.arrayElement(companies).id
  })
}
console.log("test#4")

const data = {
  users,
  companies
}
export default data;

