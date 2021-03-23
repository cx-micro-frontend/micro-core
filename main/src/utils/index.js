import fnModuleExport from './core/fnModuleExport';

const libraryFiles = require.context('./library', true, /\.js/);

export default fnModuleExport(libraryFiles);
