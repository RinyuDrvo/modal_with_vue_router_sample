import faker from 'faker'

const contacts = {}

for (let index = 0; index < 10; index++) {
  const id = "user_" + index
  contacts[id] = {
    id,
    name: `${faker.name.firstName()}  ${faker.name.lastName()}`,
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  }
}

export default {
  contacts
}