const express = require("express");
const entity_emp = require("./routes/api/entity_emp");
const forms = require("./routes/api/forms");
const investor = require("./routes/api/investor");
const comments = require("./routes/api/comments");
const external_entity = require("./routes/api/external_entity");


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to TEST</h1>
    <a href="/api/entity_emp">Entity_Emp</a>
    `);
});

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
app.listen(port, () => console.log(`Server up and running on port ${port}`));
