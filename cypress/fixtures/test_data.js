
export const userDetails = {
    firstName: 'Rakesh',
    lastName:'Roby',
    email: '',
    password:'Test@12345678'
}

export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    const randomEmail = randomString + '@example.com';
    return randomEmail;
}
