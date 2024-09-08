const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/whatsapp", apiRoute);
app.listen(PORT, () => {console.log("puerto: " + PORT)})
