/* 
The fileExistsSync function is a wrapper around the existsSync function, that checks if a file exists. The fileExistsSync should be exported and available in other files by the same name.
Currently, the fileExistsSync function crashes because the file system is not imported properly. It also looks like the function is not properly exported. 
If the code is saved in a file named "files", other code should be able to call it like:

const files = require("files");
files.fileExistsSync ("someFile.js");
Fix the bugs.
*/

const fs = require('fs')

function fileExistsSync(name) {
  return fs.existsSync(name);
}

module.exports = { fileExistsSync }