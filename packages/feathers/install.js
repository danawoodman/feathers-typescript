const lnk = require('lnk');
const fs = require('fs');

try {
  if(fs.existsSync('../@feathers-typescript')){
    lnk.sync(['../@feathers-typescript'], '../@types');
  }
} catch (e){
  console.warn(`couldn't symlink @feathers-typescript into @types`);
}
