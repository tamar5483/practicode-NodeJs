const express = require('express');
const app = express();


app.get('/', (req, res) => {
  
  const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

  sdk.auth('rnd_68t51TLFYq5un2nPwteE4I87mVnC');
  sdk.getServices({limit: '20'})
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
  //res.send("hello")

});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
});