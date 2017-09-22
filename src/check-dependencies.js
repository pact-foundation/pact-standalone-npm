var pkg = require('../package.json');
var logger = require('./logger.js');

for (var packageName in pkg.optionalDependencies) {
  if (packageName.indexOf('pact-standalone') !== -1) {
    try {
      logger.info("Platform specific dependency '" + packageName + "' installing");
      require.resolve(packageName);
      logger.info("Platform specific dependency '" + packageName + "' installed successful");
      process.exit(0);
      break;
    } catch (e) {
      logger.debug(e);
    }
  }
}

logger.error("pact-standalone: Cannot resolve OS specific pact module. Download/install must of failed, please try again.");
process.exit(1);
