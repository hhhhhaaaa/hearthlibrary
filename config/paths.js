const path = require("path");
const fs = require("fs");
const url = require("url");

/* Make sure any symlinks in the project folder are resolved:
   https://github.com/facebookincubator/create-react-app/issues/637 */
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

/**
 * @param pathPar
 * @param needsSlash
 */
function ensureSlash(pathPar, needsSlash) {
  const hasSlash = pathPar.endsWith("/");

  if (hasSlash && !needsSlash) {
    return pathPar.substr(pathPar, pathPar.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${pathPar}/`;
  }

  return pathPar;
}

// eslint-disable-next-line global-require
const getPublicUrl = (appPackageJson) => envPublicUrl || require(appPackageJson).homepage;

/* We use `PUBLIC_URL` environment variable or "homepage" field to infer
   "public path" at which the app is served.
   Webpack needs to know it to put the right <script> hrefs into HTML even in
   single-page apps that may serve index.html for nested URLs like /todos/42.
   We can't use a relative path in HTML because we don't want to load something
   like /todos/42/static/js/bundle.7289d.js. We have to know the root. */
/**
 * @param appPackageJson
 */
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl
? url.parse(publicUrl).pathname
: "/");

  return ensureSlash(servedUrl, true);
}

// Config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp(".env"),
  appBuild: resolveApp("config/dist"),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveApp("src/index.js"),
  appPackageJson: resolveApp("package.json"),
  appSrc: resolveApp("src"),
  yarnLockFile: resolveApp("yarn.lock"),
  testsSetup: resolveApp("src/setupTests.js"),
  appNodeModules: resolveApp("node_modules"),
  publicUrl: getPublicUrl(resolveApp("package.json")),
  servedPath: getServedPath(resolveApp("package.json"))
};
