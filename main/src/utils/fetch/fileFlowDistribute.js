/**
 * file flow distribute handle
 * @param response
 * @param callback
 */
export const fileFlowDistribute = (response, callback) => {
  const headers = response.headers;
  console.log(response);
  const fileName = headers['downloadfilename'] ? decodeURI(headers['downloadfilename']) : '';
  let blob = new Blob([response.data], {type: headers['content-type']});
  let downloadElement = document.createElement('a');
  let href = window.URL.createObjectURL(blob); //create a
  downloadElement.href = href;
  downloadElement.download = fileName ? decodeURI(fileName) : 'file.xls'; //set file name
  document.body.appendChild(downloadElement);
  downloadElement.click(); //click download
  document.body.removeChild(downloadElement); //remove
  window.URL.revokeObjectURL(href);
  callback(response);
};

/**
 * flow-type List
 * @type {[string,string,string]}
 */
export const flowTypeList = [
  'application/octet-stream;charset=UTF-8',
  'application/x-msdownload',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
];
