import rover from 'object-rover';

function isArray(a) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(a) === '[object Array]';
  } else {
    return Array.isArray(a);
  }
}

async function scan(obj, regexArray) {
  if (typeof obj === 'object' && !isArray(obj) && obj !== null) {
    const stringLeaves = (await rover.getPropertiesWithTypesAsync(obj)).filter(
      e => e.type === 'string'
    );
    let results = [];
    stringLeaves.forEach(e=>{
      regexArray.forEach(r=>{
        let scanResult = rover.getProperty(obj,e.path).match(r);
        if(rover.getProperty(obj,e.path).match(r)){
          results.push({path:e.path,log:scanResult});
        }
      })
    })
    return results;
  } else {
    return [];
  }
}

export default scan;
