import { faker } from '@faker-js/faker';

export const userDetails = {
    firstName: 'Mounika',
    lastName:'P',
    email:faker.internet.email('emailtest1234083','test21', 'gib.com'),
    password:'Test@1234'
}
