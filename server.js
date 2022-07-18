const express = require("express");
const app = express();
const config = require("./config/config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");

mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/public")));

require("./middleware/passport")(passport);

app.use("/admin/staffs", require("./route/staff"));
app.use("/admin/notices", require("./route/notice"));
app.use("/admin/events", require("./route/event"));
app.use("/admin/signUp", require("./route/signUp"));
app.use("/admin/logIn", require("./route/signIn"));
app.use("/admin/messages", require("./route/message"));
app.use("/admin/galleries", require("./route/gallery"));
// app.get("/user",(req,res)=>{
//     res.json({Project:"WRIDD Nuwakot"});
// });

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = config.port;
app.listen(process.env.PORT || port);
console.log(`Server Starts Running on port ${port}`);
