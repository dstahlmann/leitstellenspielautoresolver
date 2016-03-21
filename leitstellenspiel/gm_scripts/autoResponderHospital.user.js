// ==UserScript==
// @name        autoResponderHospital
// @namespace   leitstellenspiel
// @description sends patients to hospitals
// @include     http://www.leitstellenspiel.de/vehicles/*
// @version     1
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement( 'script' );
scriptElement.type = 'text/javascript';
scriptElement.src = 'http://localhost:8668/js/autoLeitstelleHospital.js';
scriptElement.charset = 'UTF-8';
document.body.appendChild( scriptElement );