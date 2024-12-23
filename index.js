const express = require('express');
const cors = require('cors');
const app = express();

const {PORT, dbConfigMongo} = require('./config')
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

if (dbConfigMongo) {
  if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
      console.log(`Server running locally on port ${PORT}`);
      console.log('berhasil konek db mongo')
    });
  }
} else {
  console.log('belum konek db mongo')
}

module.exports = app;
