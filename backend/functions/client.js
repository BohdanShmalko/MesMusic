const TEN_HOUR = 1000 * 60 * 60 * 10
const COOKIE_DELETE = `=deleted; Expires=${new Date(0).toUTCString()}; Path=/; Domain=`;

const parseHost = host => {
    if (!host) return 'no-host-name-in-http-headers';
    const portOffset = host.indexOf(':');
    if (portOffset > -1) host = host.substr(0, portOffset);
    return host;
  };

class Client {
    constructor(req, res) {
      this.req = req;
      this.res = res;
      this.host = parseHost(req.headers.host);
      this.expires = new Date(Date.now() + TEN_HOUR).toUTCString()
      this.cookie = {};
      this.preparedCookie = [];
    }
  
    parseCookie() {
      const { req } = this;
      const { cookie } = req.headers;
      if (!cookie) return;
      const items = cookie.split(';');
      for (const item of items) {
        const parts = item.split('=');
        const key = parts[0].trim();
        const val = parts[1] || '';
        this.cookie[key] = val.trim();
      }
    }
  
    setCookie(name, val, httpOnly = false) {
      const { host } = this;
      const expires = `expires=${this.expires}`;
      let cookie = `${name}=${val}; ${expires}; Path=/; Domain=${host}`;
      if (httpOnly) cookie += '; HttpOnly';
      this.preparedCookie.push(cookie);
    }
  
    deleteCookie(name) {
      this.preparedCookie.push(name + COOKIE_DELETE + this.host);
    }
    
    sendCookie() {
      const { res, preparedCookie } = this;
      if (preparedCookie.length && !res.headersSent) {
        //console.dir({ preparedCookie });
        res.setHeader('Set-Cookie', preparedCookie);
      }
    }
  }
  
  module.exports = Client;