let figlet = require("figlet");

figlet("vaishnaviiii!!", function (err, data) {
  if (err) {
    console.log("error!!");
    console.dir(err);
    return;
  }
  console.log(data);
});