export const TOKEN_KEY = '@HUG-token'; //process.env.REACT_APP_TOKEN_KEY,
export function login(cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = TOKEN_KEY + '=' + cvalue + ';' + expires + ';path=/';
  window.location.reload();
}

export function getToken(cname) {
  let name = TOKEN_KEY + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function logout() {
  document.cookie = TOKEN_KEY + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location.reload();
}

export function isAuthenticated() {
  const token = getToken(TOKEN_KEY);
  if (token !== '') {
    return true;
  }
  return false;
}