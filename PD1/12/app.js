const fs = require(`fs`);

//Sprawdzamy zgodność danych parametrów
if (process.argv[2] === undefined) {
  console.log("Za mało parametrów!");
}
else if (process.argv[3] !== undefined) {
  console.log("Za dużo parametrów!");
}
else {
  fs.readdir(process.argv[2], (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nPliki w tym katalogu:");
      files.forEach(file => {
        console.log(file);
      });
    }
  });
}