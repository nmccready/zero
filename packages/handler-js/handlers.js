const path = require("path");
const debug = require('debug')('handler:js');

const noop = () => {};

const requireUncached = moduleString => {
  debug('requireUncached:', moduleString);
  // invalidate cache for HMR to work in dev mode
  if (process.env.NODE_ENV !== "production") {
    const resolved = require.resolve(moduleString)
    debug('deleting resolved module:', resolved);
    delete require.cache[resolved];
  }
  return require(moduleString);
};

const getFunction = (bundleInfo, errorAction) => {
  var func = requireUncached(path.join(process.env.BUILDPATH, bundleInfo.js));
  func = func && func.default ? func.default : func; // cater export default function...
  if (!func || typeof func !== "function") {
    console.log(
      `❓ Did you forget to export handler in ${path.basename(file)}?`
    );
    return errorAction()
  }
  return func;
}

const handler = (req, res, file, bundlePath, basePath, bundleInfo) => {
  if (!bundleInfo || !bundleInfo.js) return res.sendStatus(500);
  const func = getFunction(bundleInfo, () => {
    res.sendStatus(500);
    return
  })
  return (func || noop)(req, res);
};

const middleware = (app, file, bundlePath, basePath, bundleInfo) => {
  debug({ app, file, bundlePath, basePath, bundleInfo });
  if (!bundleInfo || !bundleInfo.js) {
    debug('no buildInfo: bail');
    return
  }
  const func = getFunction(bundleInfo, noop)
  return (func || noop)(app);
};

module.exports = {
  handler,
  middleware
}
