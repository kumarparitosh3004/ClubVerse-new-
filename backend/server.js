const express = require("express");
const cors = require("cors");
const clubsRoute = require("./routes/clubs");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

app.use("/api/clubs", clubsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
