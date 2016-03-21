// ==UserScript==
// @name        autoResponderPatientCloser
// @namespace   leitstellenspiel
// @description close page
// @include     http://www.leitstellenspiel.de/vehicles/*/patient/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout( function(){ window.close() }, 500 );