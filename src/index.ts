import dotenv from 'dotenv-safe';

dotenv.config();
console.log('Hello', process.env.TEST_USER);
