const app = require('./src/app')

import { configDotenv } from 'dotenv';

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})