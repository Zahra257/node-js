
const fs = require('fs')
const path = require('path');
var folder = process.argv[2];
var ext = "." + process.argv[3];
fs.readdir(folder, function(err, list){
list.forEach(err => {
    if (path.extname(err) == ext)
        console.log(err);
});
})
