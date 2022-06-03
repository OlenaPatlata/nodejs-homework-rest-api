const app= require('./app');
require('dotenv').config();
const PORT = process.env.PORT;

console.log(PORT);
app.listen(3001, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})
