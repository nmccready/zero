// module.exports = {
//   handler: require("./handler")
// }
const jsprocess = require("zero-process");
const { handler, middleware } = require("./handlers");

if (process.argv && process.argv.length === 8) {
  //start the process
  jsprocess(
    handler,
    process.argv[2],
    process.argv[3],
    process.argv[4],
    process.argv[5],
    process.argv[6],
    process.argv[7]
  );
}

const processor =  optionsArr => {
  return jsprocess(
    handler,
    optionsArr[0],
    optionsArr[1],
    optionsArr[2],
    optionsArr[3],
    optionsArr[4],
    optionsArr[5],
    true
  );
};

const middlewareProcessor = optionsArr => {
  return jsprocess(
    middleware,
    optionsArr[0],
    optionsArr[1],
    optionsArr[2],
    optionsArr[3],
    optionsArr[4],
    optionsArr[5],
    true
  );
};

processor.middleware = middlewareProcessor;

module.exports = processor;
