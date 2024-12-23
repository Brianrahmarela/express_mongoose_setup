const express = require('express');
const cors = require('cors');
const app = express();
const {PORT, dbConfigMongo} = require('./config')

// controller
// const authRouter = require('./routes/auth')
// const studentRouter = require('./routes/StudentController')
// const classRoomRouter = require('./routes/ClassRoomController')
const routes = require('./routes')

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   // console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

//route
app.use(routes);
// app.use(authRouter)
// app.use(studentRouter)
// app.use(classRoomRouter)

if (dbConfigMongo) {
  // console.log('dbConfigMongo', dbConfigMongo)
  // console.log('mongolive', MONGODB_LIVE)
  if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running locally on port ${PORT}`);
      console.log('berhasil konek db mongo')
    });
  }
} else {
  console.log('belum konek db mongo')
}

module.exports = app;
