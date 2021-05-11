import Public from './modules/public';
import User from './modules/user';
import Custom from './modules/custom';
import System from './modules/system';

export default [...Public, ...User, ...Custom, ...System];
