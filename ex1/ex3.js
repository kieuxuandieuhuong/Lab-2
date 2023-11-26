const fs = require('fs');

const JSONToFile = (obj, filename) => {
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File has been written successfully!');
    }
  });
};

JSONToFile({ test: 'is passed' }, 'testJsonFile');