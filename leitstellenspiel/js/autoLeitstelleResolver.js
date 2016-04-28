//=============================================================
//Globals
//=============================================================

var aao_RTW = 'aao_613072';
var aao_KTW = 'aao_613078';
var aao_NEF = 'aao_613197';
var aao_LNA = 'aao_613206';
var aao_OrgL = 'aao_613207';

var aao_RTWn = [ 'aao_613072', 'aao_613073', 'aao_613074', 'aao_613075', 'aao_613077' ];


//=============================================================
//Functions
//=============================================================
function bootstrap()
{	
	existEasteregg();
	var missionImage = $( '#missionH1 > img' );
	if( missionImage[0].getAttribute( 'src' ).indexOf('rot') == -1 )
	{ closeTab(); }
	else
	{ responseEmergency(); }
}

function responseEmergency()
{
	var emergencyCase = getEmergencyCase();
	var amountOfPatients = countPatients();
	if( emergencyCase != 'Krankentransport' )
	{
		aaokeys = getAAO( emergencyCase );
		if( amountOfPatients == 0 )
		{			
			aaokeys.forEach( clickButton );
		}
		else
		{	
			for( i = 0; i <= aaokeys.length; i++ )
			{
				if( aaokeys.indexOf( aao_RTWn[i] ) >= 0 ){ aaokeys.splice( aaokeys.indexOf( aao_RTWn[i] ) ,1 ); }
			}
			aaokeys.forEach( clickButton );
			
			for( i = 1; i <= amountOfPatients; i++ ){ clickButton( aao_RTW ); }
			for( i = 1; i <= Math.ceil( amountOfPatients / 3 ); i++ ){ clickButton( aao_NEF ); }
			if( amountOfPatients >= 5 ){ clickButton( aao_LNA ); }
			if( amountOfPatients >= 10 ){ clickButton( aao_OrgL ); }
		}	
	}
	else
	{ alarmKTW(); }
	setTimeout( function(){ $( '#mission_alarm_btn' ).click(); }, 1000 );	
}

// @brief	returns name of the emergency
// @param	-
function getEmergencyCase()
{
	$( 'img' ).remove();
	$( 'small' ).remove();
	var emergencyCase = $( '#missionH1' ).text().trim();
	if( emergencyCase.lastIndexOf( ' (Brandmeldeanlage)' ) != -1 )
	{
		emergencyCase = emergencyCase.substr( 0, emergencyCase.lastIndexOf( ' (Brandmeldeanlage)' ) );
	}
	return emergencyCase;
}

// @brief	returns the amount of patients to this emergency
// @param	-
function countPatients()
{
	return $( '.patient_progress' ).length
}

// @brief	returns an array of aao ID's from localStorage
//			localstorage must be filled
// @param	string	is the name of the alarm
function getAAO( emergencyCase )
{
	return JSON.parse( localStorage.getItem( emergencyCase ) );	
}

// @brief	alarms a KTW, or an RTW if no KTW is available
// @param	-
function alarmKTW()
{
	if( $( '#available_' + aao_KTW ).hasClass( 'label-success' ) )
	{ clickButton( aao_KTW ); }
	else
	{ clickButton( aao_RTW ); }
}

// @brief	click the element with the given id
// @param	int		is the id of the element
function clickButton( buttonId )
{
	$( '#'+buttonId ).click();
}

// @brief	close the current tab
// @param	-
function closeTab()
{	
	window.location.href = 'http://localhost:8668/localPages/closeTab.php';
}

// @brief	check if an easteregg exist (only during the easter-event)
//			and collect it via clickevent 
// @param	-
function existEasteregg()
{
	if( $( 'a > img' ).attr('src') == '/images/osterei_0.png' ||
		$( 'a > img' ).attr('src') == '/images/osterei_1.png' ||
		$( 'a > img' ).attr('src') == '/images/osterei_2.png' ||
		$( 'a > img' ).attr('src') == '/images/osterei_3.png' ||
		$( 'a > img' ).attr('src') == '/images/osterei_4.png' ||
		$( 'a > img' ).attr('src') == '/images/osterei_5.png' )
	{
		window.location.href = window.location.href + '/easteregg';
	}	
}

//=============================================================
//Overwrite
//=============================================================

// @brief	overwrites the alert()-function -> alert texts will apear at the bottom of the DOM
window.alert=function(){var H=2.4;var D={button_title:"ok",callback:function(){},left:-1,top:-1,width:-1,height:-1,modal:true,timeout:0};if(arguments.length==2&&typeof arguments[1]=="object"){D=J(arguments[1],D)}else{if(arguments.length==3){D=J(arguments[2],D)}}window.alert_callback=D.callback;if(arguments.length==1||(arguments.length==2&&typeof arguments[1]!="string")){arguments=["",arguments[0]]}var A=document.getElementById("alert");if(A){document.body.removeChild(A)}if(D.modal){var F=document.createElement("DIV");F.id="alert-modal";F.className="alert-modal";document.body.appendChild(F)}A=document.createElement("DIV");A.id=A.className="alert";document.body.appendChild(A);A.innerHTML=(arguments[0]==""?"":'<div class="title">'+arguments[0]+"</div>")+'<div class="body">'+arguments[1]+'</div><div class="button"><a id="close_alert" href="" onclick="var _m3423=document.getElementById(\'alert-modal\');if(_m3423)document.body.removeChild(_m3423);document.body.removeChild(document.getElementById(\'alert\'));alert_callback();return false;">'+D.button_title+"</a></div>";var B=G(),K=Math.max(I(arguments[0]),I(arguments[1]))*6,C=0,E=0;if(D.width==-1){D.width=K}else{C=D.width;K=0}if(D.left==-1){D.left=parseInt((B[0]+B[2]-K-C)/2)}A.style.display="block";if(D.top==-1){D.top=parseInt(((B[1]+B[3]-(D.height==-1?0:(D.height/2)))/2)-(A.pixelHeight||A.offsetHeight))}A.style.width=D.width+"px";if(D.height>0){A.style.height=D.height+"px"}A.style.left=D.left+"px";A.style.top=D.top+"px";function J(M,L){for(var N in L){if(N in M){continue}M[N]=L[N]}return M}function I(O){var P=O.split("<br />");if(P.length<=1){P=O.split("<br>")}if(P.length<=1){return O.replace(/<(?:.|\s)*?>/g,"").length}var L=0;for(var N=0;N<P.length;N++){var M=P[N].replace(/<(?:.|\s)*?>/g,"");if(M.length>L){L=M.length}}return L}function G(){var M=0,N=0,L=0,O=0;if(typeof window.innerWidth=="number"){M=window.innerWidth;N=window.innerHeight}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){M=document.documentElement.clientWidth;N=document.documentElement.clientHeight}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){M=document.body.clientWidth;N=document.body.clientHeight}}}if(typeof window.pageYOffset=="number"){O=window.pageYOffset;L=window.pageXOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){O=document.body.scrollTop;L=document.body.scrollLeft}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){O=document.documentElement.scrollTop;L=document.documentElement.scrollLeft}}}return[L,O,M,N]}};

// @brief	
String.prototype.trim = function () {
    return this.replace(/^\s+/g, '').replace(/\s+$/g, '');
}

//=============================================================
//Initiate
//=============================================================
setTimeout( function(){ bootstrap(); }, 1500);
