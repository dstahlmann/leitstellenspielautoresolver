// ==UserScript==
// @name        autoResponderChangeButtons
// @namespace   leitstellenspiel
// @description changes Buttons
// @include     http://www.leitstellenspiel.de/buildings/1090520
// @version     1
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.src = 'http://localhost:8668/js/autoLeitstelleHirePersonalButtons.js';
scriptElement.charset = 'UTF-8';
document.body.appendChild( scriptElement );
