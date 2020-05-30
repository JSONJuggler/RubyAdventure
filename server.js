const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Set static folder
app.use(express.static("public"));

// Serve index.html on all routes except the api routes above
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
