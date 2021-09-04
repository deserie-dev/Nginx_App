const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (_, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/nginx-cover", (_, res) => {
	let img = fs.readFileSync(path.join(__dirname, "images/nginx-cover-pic.png"));
	res.writeHead(200, { "Content-Type": "image/png" });
	res.end(img, "binary");
});


app.listen(3000, () => console.log("Nginx app is ready!"));