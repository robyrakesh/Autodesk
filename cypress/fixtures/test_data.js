import { faker } from '@faker-js/faker';

export const userDetails = {
    firstName: 'Mounika',
    lastName:'P',
    email:faker.internet.email('rem','test', 'gib.com'),
    password:'Test@1234'
}
