//=============================================================
//Globals
//=============================================================
var currentEmergencyCalls = [];


//=============================================================
//Functions
//=============================================================
function bootstrap()
{
	setInterval( collectNewCases, 7000 );
	setInterval( checkForUnsolved, 5000 );
	setInterval( checkVehicles, 10000 );
}

function collectNewCases()
{
	var emergencyCalls = $( "#mission_list > .missionSideBarEntry" );
	extractInformation( emergencyCalls );
	
	//var patientTransports = $( "#mission_list_krankentransporte > .missionSideBarEntry" );
	//extractInformation( patientTransports );
	
	//var greatHarmCases = $( "#mission_list_alliance > .missionSideBarEntry" );
	//extractInformation( greatHarmCases );
}

function extractInformation( eCalls )
{
	var id = 0;
	var situation = "";
	
	for (i = 0; i < eCalls.length; i++)
	{
		id = eCalls[i].getAttribute( 'id' ).substr( 8 );
		situation = $( '#mission_panel_heading_' + id + ' > .map_position_mover' );
		
		var situationText = situation[0].text;
		while( situationText.lastIndexOf( ',' ) != -1 )
		{
			situationText = situationText.substr( 0, situationText.lastIndexOf( ',' ) );
		}
		
		var eCall = [];
		eCall.push( id );
		eCall.push( situationText );
		eCall.push( situation[0].getAttribute( 'data-longitude' ) );
		eCall.push( situation[0].getAttribute( 'data-latitude' ) );
		
		setNewCase( id, eCall );				
	}
}

function setNewCase( caseId, eCall )
{
	if( $( '#mission_participant_new_' + caseId ).hasClass('hidden') == false || !document.getElementById( 'mission_missing_' + caseId ) )
	{
		currentEmergencyCalls.push( eCall );			
	}
}

function checkForUnsolved()
{
	if( currentEmergencyCalls.length >= 1 )
	{
		resolveEmergency();
	}
}

function resolveEmergency()
{
	var caseId = currentEmergencyCalls[0][0];
	var escapePoint = ' <div id="escapePoint_' + caseId + '" onClick="fleeFromHere(' + caseId + ')" value="' + getUnixTime() + '" target="-">Einsatz bearbeitet: ' + getHumanTime() + '</div>';
	$( '#mission_panel_heading_' + caseId + ' > .map_position_mover' ).after( escapePoint );
	currentEmergencyCalls.shift();
	clickButton( 'escapePoint_' + caseId );
}

function clickButton( buttonId )
{
	$( '#'+buttonId ).click();
}

function fleeFromHere( id )
{
	window.open( 'http://localhost:8668/localPages/resolver.php?id=' + id );
}

function getUnixTime()
{
	var date = new Date();
	return date.getTime();
}

function getHumanTime()
{
	var date = new Date();
	return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function checkVehicles()
{
	var radioCalls = $( '#radio_messages_important > li' );
	for( i = 0; i < radioCalls.length; i++ )
	{
		radioCall = radioCalls[i].getAttribute('class');
		vehicleId = radioCall.substr( radioCall.lastIndexOf( '_' ) +1 ).trim();
		
		sendRTWtoHospital( vehicleId );
	}
}

function sendRTWtoHospital( RTWid )
{
	window.open( 'http://www.leitstellenspiel.de/vehicles/' + RTWid );
}

function checkFuStw()
{
	for( i = 0; i < FuStWid.length; i++ )
	{
		window.open( 'http://www.leitstellenspiel.de/vehicles/'+FuStWid[i] );
	}
}


//=============================================================
//Initiate
//=============================================================
setTimeout( function(){ bootstrap(); }, 200 );
setTimeout( function(){ location.reload( true ); }, 300000 ); 

