const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
const app = express();
app.use(cors());

// Connect to MongoDB
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, () => console.log(`Listening on port ${port}`));
