const express = require("express");
const entity_emp = require("./routes/api/entity_emp");
const forms = require("./routes/api/forms");
const investor = require("./routes/api/investor");
const comments = require("./routes/api/comments");
const external_entity = require("./routes/api/external_entity");
const mongoose = require("mongoose");



const app = express();
// DB Config
const db = require('./config/keys').mongoURI
const dbConfig = {useNewUrlParser: true};
// Connect to mongo
mongoose
  .connect(db,dbConfig)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Direct routes to appropriate files

app.use("/api/entity_emp", entity_emp);
app.use("/api/forms", forms);
app.use("/api/investor", investor);
app.use("/api/comments", comments);
app.use("/api/external_entity", external_entity);

// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

const port = 3000;
app.listen(process.env.PORT || port, () =>
  console.log(`Server up and running on port ${port}`)
);
