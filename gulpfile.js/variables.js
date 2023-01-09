var args = require('yargs').argv;

/**
 * ---------------------------------------------------------------------------------------------
 * Global settings
 * ---------------------------------------------------------------------------------------------
<<<<<<< HEAD
*/
=======
 */
>>>>>>> 0b14c6765e081fe0f97180e23d4fc36e1679d3f0

const DEFAULT_DEMO = 'creative';
const AVAILABLE_DEMOS = ['creative'];

var FOLDER_PATHS = {
    baseSrc: "src/", // source files
    baseDist: "dist/", // build files
    baseAssets: "src/assets/", // base assets
};

<<<<<<< HEAD
const selectedDemo = (args['demo'] ? (AVAILABLE_DEMOS.indexOf(args['demo']) >= 0 ? args['demo'] : null): null) ? args['demo'] : DEFAULT_DEMO;
=======
const selectedDemo = (args['demo'] ? (AVAILABLE_DEMOS.indexOf(args['demo']) >= 0 ? args['demo'] : null) : null) ? args['demo'] : DEFAULT_DEMO;
>>>>>>> 0b14c6765e081fe0f97180e23d4fc36e1679d3f0

function getSrcFolderPath() {
    return FOLDER_PATHS.baseSrc + selectedDemo + "/";
}

function getDistFolderPath() {
    return FOLDER_PATHS.baseDist + selectedDemo + "/";
}

function getDistAssetFolderPath() {
    return getDistFolderPath(selectedDemo) + "assets/";
}

module.exports = {
<<<<<<< HEAD
    getSelectedDemo: function () { return selectedDemo },
    getBaseSrcPath: function () { return FOLDER_PATHS.baseSrc },
    getBaseDistPath: function () { return FOLDER_PATHS.baseDist },
    getBaseAssetsPath: function () { return FOLDER_PATHS.baseAssets },
=======
    getSelectedDemo: function() { return selectedDemo },
    getBaseSrcPath: function() { return FOLDER_PATHS.baseSrc },
    getBaseDistPath: function() { return FOLDER_PATHS.baseDist },
    getBaseAssetsPath: function() { return FOLDER_PATHS.baseAssets },
>>>>>>> 0b14c6765e081fe0f97180e23d4fc36e1679d3f0
    getSrcPath: getSrcFolderPath,
    getDistPath: getDistFolderPath,
    getDistAssetsPath: getDistAssetFolderPath
}