const express = require('express');
const app = express();
const contactRoutes = require('./routes/ContactRoutes');


app.use(express.json());
app.use('/contacts', contactRoutes);

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
