const mymodule = require('./mymodule')
const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, list) => {
  if (err) return console.err(err);
  list.forEach(e => {
    console.log(e);
  });
});