class ReadWriteFiles {

  readFile(file, [encoding], [callback]) {
    fs = require('fs');
    fs.readFile(file, [encoding], [callback]);
  }

  writeFile(filepath, data, [encoding], [callback]) {
    fs = require('fs');
    fs.writeFile(filepath, data, [encoding], [callback]);
  }
}

module.exports = new ReadWriteFiles();