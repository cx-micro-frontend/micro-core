import QRCode from 'davidshimjs-qrcodejs';

/*
 *create a QRCode(创建一个二维码)
 *createQRCode(targetObj,options)
 *@params targetObj 显示二维码的元素对象或该元素的ID
 *@params options 参数配置
 *以下是参数说明：
	options.width 图像宽度 默认256
	options.height 图像高度 默认256
	colorDark 前景色  默认#000000
	colorLight 背景色  默认#ffffff
	correctLevel 容错级别，可设置为：
		QRCode.CorrectLevel.L
		QRCode.CorrectLevel.M
		QRCode.CorrectLevel.Q
		QRCode.CorrectLevel.H
 * */
export const createQRCode = (targetObj, options) => {
  if (!targetObj) {
    targetObj = document.createElement('i');
    targetObj.style = 'display:none';
  }
  let $returnObj = {};

  let dataList = new QRCode(targetObj, {
    text: options.text,
    width: options.width,
    height: options.height,
    colorDark: options.colorDark || '#000000',
    colorLight: options.colorLight || '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
  return dataList;
};
