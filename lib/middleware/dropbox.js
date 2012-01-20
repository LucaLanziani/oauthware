/*!
 * OAuthware - Middleware - Dropbox
 * Copyright(c) 2011 CodeHolics Inc.
 * Copyright(c) 2011 Injo Luuvish Hwang
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var oauthcore   = require('../oauth/oauthcore'),
    OAuth1      = require('../oauth/oauth1'),
    parse       = require('url').parse,
    querystring = require('querystring');


exports = module.exports = Dropbox;


function Dropbox(options) {
  if (!(this instanceof Dropbox)) {
    return new Dropbox(options);
  }

  var defaults = {
    name: 'dropbox',
    host: {
      'request_token': 'https://api.dropbox.com/1/oauth/request_token',
      'access_token':  'https://api.dropbox.com/1/oauth/access_token',
      'authorize':     'https://www.dropbox.com/1/oauth/authorize',
      'api':           'https://api.dropbox.com/1'
    }
  };
  options.name || (options.name = defaults.name);
  options.host || (options.host = defaults.host);
  
  OAuth1.call(this, options, defaults);
}

Dropbox.prototype = Object.create(OAuth1.prototype);
Dropbox.prototype.constructor = Dropbox;

Dropbox.prototype.login = function login(req, res, next) {
  OAuth1.prototype.login.call(this, req, res, next);
  // data.type = 'text/html'
};

Dropbox.prototype.logout = function logout(req, res, next) {
  OAuth1.prototype.logout.call(this, req, res, next);
  // data.type = 'application/json'
};

Dropbox.prototype.auth = function auth(req, res, next) {
  OAuth1.prototype.auth.call(this, req, res, next);
  // data.type = 'text/html'
};

Dropbox.prototype.api = function api(req, res, next) {
  OAuth1.prototype.api.call(this, req, res, next);
  // data.type = 'application/json'
};
