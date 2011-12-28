# OAuthware

OAuthware is an authentication library for Node.js, Connect.js and Express.js.

OAuthware supports simple authentication of Twitter, Facebook, Google, and other many providers using OAuth 1.0a/2.0.

## Installation

    $ npm install oauthware

## Usage

#### Connect/Express middleware

OAuthware is middleware of Connect.js and Express.js. Using as handle of HTTP Server. 

    var connect = require('connect),
        oauthware = require('oauthware');

    connect.createServer(
      connect.cookieParser(),
      connect.session({secret: 'oauthware'}),
      oauthware.createServer(
        oauthware.twitter({
          consumerKey: TWITTER_CONSUMER_KEY,
          consumerSecret: TWITTER_CONSUMER_SECRET
        }),
        oauthware.facebook({
          clientId: FACEBOOK_APP_ID,
          clientSecret: FACEBOOK_APP_SECRET
        }),
        oauthware.google({
          clientId: GOOGLE_APP_ID,
          clientSecret: GOOGLE_APP_SECRET
        }),
      )
    );

The function createServer() of OAuthware will work just like connect.createServer() !

    var oauth = oauthware.createServer()

    oauth.use('/auth/twitter', oauthware.twitter({
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET
    }))
    oauth.use('/auth/facebook', oauthware.facebook({
      clientId: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET
    });

OAuthware.middleware is lists of authentication providers.

    Object.keys(require('oauthware').middleware);

    ['facebook', 'twitter', 'google', 'github', ...]

Middleware of OAuthware will create a handle of HTTP Server

    var twitter = oauthware.twitter({
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET
    });
    var Facebook = oauthware.facebook({
      clientId: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET
    });

    connect.createServer(
      connect.cookieParser(),
      connect.session({secret: 'oauthware'}),
      twitter,
      facebook
    );


#### Authentication API

    var twitter = oauthware.twitter({
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET
    });

    connect.router(function (app) {
      app.get('/twitter/auth', twitter.authenticate);
      app.get('/twitter/signin', twitter.signIn);
      app.get('/twitter/signOut', twitter.signOut);
      app.get('/twitter/rest', twitter.rest);
    });

#### Examples

## Provider

<table>
  <thead>
    <tr><th>Provider</th><th>Description</th><th>Developer</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://github.com/luuvish/oauthware-twitter">Twitter</a></td><td>Twitter authentication</td><td></td></tr>
    <tr><td><a href="https://github.com/luuvish/oauthware-facebook">Facebook</a></td><td>Facebook authentication</td><td></td></tr>
  </tbody>
</table>

## Credits

- [Luuvish](http://github.com/luuvish)

## License

(The MIT License)

Copyright © 2011 CodeHolics Inc.  
Copyright © 2011 Luuvish

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHERS DEALINGS IN THE SOFTWARE.
