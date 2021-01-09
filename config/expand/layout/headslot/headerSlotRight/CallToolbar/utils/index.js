//---------------------------通用函数--------------------------------
/***
 ***UTF8&Base64位编码
 ***
 ***/
const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const encode = input => {
  var output = '';
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  input = _utf8_encode(input);
  // input = Utf8ToUnicode(input)
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output =
      output +
      _keyStr.charAt(enc1) +
      _keyStr.charAt(enc2) +
      _keyStr.charAt(enc3) +
      _keyStr.charAt(enc4);
  }

  return output;
};

/***
 ***UTF8&Base64位解码
 ***
 ***/
export const decode = input => {
  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  while (i < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i++));
    enc2 = _keyStr.indexOf(input.charAt(i++));
    enc3 = _keyStr.indexOf(input.charAt(i++));
    enc4 = _keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  }

  output = _utf8_decode(output);

  return output;
};

/***
 ***UTF—8编码
 ***
 ***/
// export const _utf8_encode = (string) => {
// 	string = string.replace(/\r\n/g, "\n");
// 	var utftext = "";

// 	for (var n = 0; n < string.length; n++) {

// 		var c = string.charCodeAt(n);

// 		if (c < 128) {
// 			utftext += String.fromCharCode(c);
// 		}
// 		else if ((c > 127) && (c < 2048)) {
// 			utftext += String.fromCharCode((c >> 6) | 192);
// 			utftext += String.fromCharCode((c & 63) | 128);
// 		}
// 		else {
// 			utftext += String.fromCharCode((c >> 12) | 224);
// 			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
// 			utftext += String.fromCharCode((c & 63) | 128);
// 		}

// 	}

// 	return utftext;
// }

/***
 ***UTF—8解码
 ***
 ***/
export const _utf8_decode = utftext => {
  var string = '';
  var i = 0;
  var c = 0;
  var c3 = 0;
  var c2 = 0;

  while (i < utftext.length) {
    c = utftext.charCodeAt(i);

    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }

  return string;
};

/***
 ***UTF—8转变成Unicode
 ***
 ***/
// export const Utf8ToUnicode = (strUtf8) =>
// {
//         var bstr = "";
//         var nTotalChars = strUtf8.length;        // total chars to be processed.
//         var nOffset = 0;                                        // processing point on strUtf8
//         var nRemainingBytes = nTotalChars;        // how many bytes left to be converted
//         var nOutputPosition = 0;
//         var iCode, iCode1, iCode2;                        // the value of the unicode.

//         while (nOffset < nTotalChars)
//         {
//                 iCode = strUtf8.charCodeAt(nOffset);
//                 if ((iCode & 0x80) == 0)                        // 1 byte.
//                 {
//                         if ( nRemainingBytes < 1 )                // not enough data
//                                 break;

//                         bstr += String.fromCharCode(iCode & 0x7F);
//                         nOffset ++;
//                         nRemainingBytes -= 1;
//                 }
//                 else if ((iCode & 0xE0) == 0xC0)        // 2 bytes
//                 {
//                         iCode1 =  strUtf8.charCodeAt(nOffset + 1);
//                         if ( nRemainingBytes < 2 ||                        // not enough data
//                                  (iCode1 & 0xC0) != 0x80 )                // invalid pattern
//                         {
//                                 break;
//                         }

//                         bstr += String.fromCharCode(((iCode & 0x3F) << 6) | (         iCode1 & 0x3F));
//                         nOffset += 2;
//                         nRemainingBytes -= 2;
//                 }
//                 else if ((iCode & 0xF0) == 0xE0)        // 3 bytes
//                 {
//                         iCode1 =  strUtf8.charCodeAt(nOffset + 1);
//                         iCode2 =  strUtf8.charCodeAt(nOffset + 2);
//                         if ( nRemainingBytes < 3 ||                        // not enough data
//                                  (iCode1 & 0xC0) != 0x80 ||                // invalid pattern
//                                  (iCode2 & 0xC0) != 0x80 )
//                         {
//                                 break;
//                         }

//                         bstr += String.fromCharCode(((iCode & 0x0F) << 12) |
//                                         ((iCode1 & 0x3F) <<  6) |
//                                         (iCode2 & 0x3F));
//                         nOffset += 3;
//                         nRemainingBytes -= 3;
//                 }
//                 else                                                                // 4 or more bytes -- unsupported
//                         break;
//         }

//         if (nRemainingBytes != 0)
//         {
//                 // bad UTF8 string.
//                 return "";
//         }

//         return bstr;
// }
//通用取当前时间
export const CurentTime = () => {
  var now = new Date();

  var year = now.getFullYear(); //年
  var month = now.getMonth() + 1; //月
  var day = now.getDate(); //日

  var hh = now.getHours(); //时
  var mm = now.getMinutes(); //分
  var sc = now.getSeconds(); //获取当前秒数(0-59)
  var scc = now.getMilliseconds(); //获取当前毫秒数(0-999)
  var clock = year + '-';

  if (month < 10) clock += '0';

  clock += month + '-';

  if (day < 10) clock += '0';

  clock += day + ' ';

  if (hh < 10) clock += '0';
  clock += hh + ':';
  if (mm < 10) clock += '0';
  clock += mm + ':';
  if (sc < 10) clock += '0';
  clock += sc + ' ' + scc;
  return clock;
};
