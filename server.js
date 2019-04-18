const express = require("express");
const entity_emp = require("./routes/api/entity_emp");
const forms = require("./routes/api/forms");
const investor = require("./routes/api/investor");
const comments = require("./routes/api/comments");
const external_entity = require("./routes/api/external_entity");
const mongoose = require("mongoose");
var cors = require("cors");
const passport = require('passport')



const app = express();
// DB Config
const uri = require('./config/keys').mongoURI
const dbConfig = {useNewUrlParser: true};
// Connect to mongo
const db1= mongoose
  .connect(uri,dbConfig)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
require('./config/passport')(passport)


// Direct routes to appropriate files
// const testD  b = mongoose.connection;
// testDb.createCollection("Counters");
// testDb.counters.insert({ _id: "productid", sequence_value: 0 })
app.use("/api/entity_emp", entity_emp);
app.use("/api/forms", forms);
app.use("/api/investor", investor);
app.use("/api/comments", comments);
app.use("/api/external_entity", external_entity);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

const port = 5000;
app.listen(process.env.PORT || port, () =>
  console.log(`Server up and running on port ${port}`)
);
