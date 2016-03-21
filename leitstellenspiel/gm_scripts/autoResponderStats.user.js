// ==UserScript==
// @name        autoResponderStats
// @namespace   leitstellenspiel
// @description collects stats from autoResponder
// @include     http://www.leitstellenspiel.de/profile/97346
// @version     1
// @grant       none
// ==/UserScript==

var pageHeader = $( '.page-header' );
var credits = pageHeader[0].childNodes[6];
credits = credits.data;
credits = credits.substr( 0, credits.indexOf( 'v' ) ).trim();
setTimeout(function(){ window.close(); }, 1000);
window.open( 'http://localhost:8668/localPages/stats.php?credits='+credits );
setTimeout(function(){ window.close(); }, 1000);
