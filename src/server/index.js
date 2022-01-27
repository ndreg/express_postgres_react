const express = require("express");
const notesRoute = require("./routes/notesRoute");
const bp = require("body-parser");

const app = express();
app.set("PORT", process.env.PORT || 3001);
app.use(bp.json());

app.use(notesRoute);

app.listen(app.get("PORT"), () => console.log("Knock Knock!"));
