// module.exports = {
//   handler: require("./handler")
// }
const jsprocess = require("zero-process");
const { handler, middleware } = require("./handlers");

module.exports = (endpointData, buildInfo) => {
  return jsprocess(handler, endpointData, buildInfo);
};

const middlewareProcessor = (endpointData, buildInfo) => {
  return jsprocess(middleware, endpointData, buildInfo);
};

processor.middleware = middlewareProcessor;

module.exports = processor;
