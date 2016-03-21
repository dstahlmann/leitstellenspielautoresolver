// ==UserScript==
// @name        autoResponder
// @namespace   leitstellenspiel
// @description Is a service to respond to emergency calls
// @include     http://www.leitstellenspiel.de/
// @version     1
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.src = 'http://localhost:8668/js/autoLeitstelle.js';
scriptElement.charset = 'UTF-8';
document.body.appendChild( scriptElement );
