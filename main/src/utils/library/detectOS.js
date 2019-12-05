/**
 * 获取操作系统版本
 * @returns {string}
 */
export const detectOS = () => {
  const Platform = navigator.platform;
  const UserAgent = navigator.userAgent;

  const isWin = Platform === 'Win32' || Platform === 'Windows';

  const isMac =
    Platform === 'Mac68K' ||
    Platform === 'MacPPC' ||
    Platform === 'Macintosh' ||
    Platform === 'MacIntel';
  if (isMac) return 'Mac';

  const isUnix = Platform === 'X11' && !isWin && !isMac;
  if (isUnix) return 'Unix';

  const isLinux = String(Platform).indexOf('Linux') > -1;
  if (isLinux) return 'Linux';

  if (isWin) {
    const isWin2K =
      UserAgent.indexOf('Windows NT 5.0') > -1 || UserAgent.indexOf('Windows 2000') > -1;
    if (isWin2K) return 'Win2000';

    const isWinXP =
      UserAgent.indexOf('Windows NT 5.1') > -1 || UserAgent.indexOf('Windows XP') > -1;
    if (isWinXP) return 'WinXP';

    const isWin2003 =
      UserAgent.indexOf('Windows NT 5.2') > -1 || UserAgent.indexOf('Windows 2003') > -1;
    if (isWin2003) return 'Win2003';

    const isWinVista =
      UserAgent.indexOf('Windows NT 6.0') > -1 || UserAgent.indexOf('Windows Vista') > -1;
    if (isWinVista) return 'WinVista';

    const isWin7 = UserAgent.indexOf('Windows NT 6.1') > -1 || UserAgent.indexOf('Windows 7') > -1;
    if (isWin7) return 'Win7';

    const isWin10 = UserAgent.indexOf('Windows NT 10') > -1 || UserAgent.indexOf('Windows 10') > -1;
    if (isWin10) return 'Win10';
  }
  return 'other';
};
