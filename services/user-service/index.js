require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Jasvi kamboj" }]);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
