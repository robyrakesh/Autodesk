
export const userDetails = {
    firstName: 'Mounika',
    lastName:'P',
    email: '',
    password:'Test@1234'
}

export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    const randomEmail = randomString + '@example.com';
    return randomEmail;
}
