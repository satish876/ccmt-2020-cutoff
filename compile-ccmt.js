const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./college-wise-cutoff.json", "utf8"));

// const colleges = data
//   .reduce((acc, clg) => {
//     return acc.concat(Object.keys(clg));
//   }, [])
//   .reduce((acc, i) => {
//     if (acc.indexOf(i) === -1) acc.push(i);
//     return acc;
//   }, []);

// const courses = data
//   .reduce((acc, clg) => {
//     let name = Object.keys(clg)[0];
//     // console.log(Object.keys(clg[name]));
//     return acc.concat(Object.keys(clg[name]));
//   }, [])
//   .reduce((acc, i) => {
//     if (acc.indexOf(i) === -1) acc.push(i);
//     return acc;
//   }, []);

const output = {};
data.forEach((clg) => {
  const name = Object.keys(clg)[0];

  Object.keys(clg[name]).forEach((key) => {
    if (typeof output[key] === "undefined") output[key] = {};
    output[key][name] = clg[name][key];
  });
});

fs.writeFile("./course-wise-cutoff.json", JSON.stringify(output), function (
  err
) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
// console.log(output);
