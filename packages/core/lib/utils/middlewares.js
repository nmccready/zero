// could be one regex, but this is easier on the eyes
const isMiddleware = filePath =>
  /^middlewares\.(js|ts)/.test(filePath) ||
  /^middlewares\/index\.(js|ts)/.test(filePath);

module.exports = {
  isMiddleware
};
