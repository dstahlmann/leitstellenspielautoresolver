// ==UserScript==
// @name        autoResponderResolver
// @namespace   leitstellenspiel
// @description solves the current emergency
// @include     http://www.leitstellenspiel.de/missions/*
// @version     1
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement( 'script' );
scriptElement.type = 'text/javascript';
scriptElement.src = 'http://localhost:8668/js/autoLeitstelleResolver.js';
scriptElement.charset = 'UTF-8';
document.body.appendChild( scriptElement );