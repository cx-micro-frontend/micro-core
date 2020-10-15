/**
 * 生成资源加载路径
 * @param val
 * 1、http => url
 * 2、data:image/ => base64
 * 3、否则 => 域名 + /api/fastdfs/fastdfs/pictureUrl?fileId=xxx
 * @returns {*}
 */
export const resourcepath = val => {
  const httpStart = val.indexOf('http://') === 0;
  const base64Start = val.indexOf('data:image/') === 0;

  if (httpStart || base64Start) {
    return val;
  } else {
    return `${process.env.BASE_API}/fastdfs/fastdfs/pictureUrl?fileId=${val}`;
    // return `${window.location.protocol}//${window.location.host}/api/fastdfs/fastdfs/pictureUrl?fileId=${val}`;
  }
};
