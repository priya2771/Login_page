function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "priyanka" && password === "2001") {
    alert("login success!");
  } else {
    alert("login failed!");
  }
}

// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;
// const pwd = "2001";

// var userIsAuthorised = false;

// app.use(bodyParser.urlencoded({ extended: true }));

// function passwordCheck(req, res, next) {
//   const password = req.body["password"];
//   if (password === pwd) {
//     userIsAuthorised = true;
//   }
//   next();
// }
// app.use(passwordCheck);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/check", (req, res) => {
//   if (userIsAuthorised) {
//     res.sendFile(__dirname + "/index2.html");
//   } else {
//     res.sendFile(__dirname + "/index.html");
//     //Alternatively res.redirect("/");
//   }
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
