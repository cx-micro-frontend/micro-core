import utils from '@NEAP/utils';

let ip = utils.getBaseURL() || location.origin;
export const  socketApi = `${ip.replace('http','ws')}/notice/ws/`;

