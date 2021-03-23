import fnModuleExport from '../utils/core/fnModuleExport';

const libraryFiles = require.context('./lessCode', true, /\.js/);

export default fnModuleExport(libraryFiles);
