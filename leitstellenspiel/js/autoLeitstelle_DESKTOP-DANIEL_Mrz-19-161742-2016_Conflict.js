//=============================================================
//Globals
//=============================================================
var currentEmergencyCalls = [];

var vehicleTypeSwitch = 0;

var RTWid = [
	'3442214',	// Bünde-01
	'3442209',	// Bünde-02
	'3443342',	// Bünde-03
	'3623514',	// Bünde-04
	'3449124',	// Minden-01
	'3501583',	// Spenge-01
	'3514950',	// Spenge-02
	'3587844',	// Spenge-03
	'3587847',	// Spenge-04
	'3548217'	// Spenge-05	
];

var FuStWid = [
	'3452473',	// Bünde-01
	'3453712',	// Bünde-02
	'3453851',	// Bünde-03
	'3581546',	// Löhne-01
	'3581577',	// Löhne-02
	//'n/a',	// Löhne-03
	'3564818',	// Minden-01
	'3564835',	// Minden-02
	'3566238',	// Minden-03
	'3403255',	// Spenge-01
	'3403234',	// Spenge-02
	'3420233',	// Spenge-03
];

//=============================================================
//Functions
//=============================================================
function bootstrap()
{
	setInterval( collectNewCases, 7000 );
	setInterval( checkForUnsolved, 5000 );
	setInterval( function(){ checkVehicles(); }, 45000 );
}

function collectNewCases()
{
	var emergencyCalls = $( "#mission_list > .missionSideBarEntry" );
	extractInformation( emergencyCalls );
	
	//var patientTransports = $( "#mission_list_krankentransporte > .missionSideBarEntry" );
	//extractInformation( patientTransports );
	
	var greatHarmCases = $( "#mission_list_alliance > .missionSideBarEntry" );
	extractInformation( greatHarmCases );
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
	//if( vehicleTypeSwitch == 0 ){ vehicleTypeSwitch = 1; }else{ vehicleTypeSwitch = 0; }
	//if( vehicleTypeSwitch == 0 ){ checkRTW(); }
	//if( vehicleTypeSwitch == 1 ){ checkFuStw(); }
	
	checkRTW();
}

function checkRTW()
{
	for( i = 0; i < RTWid.length; i++ )
	{
		window.open( 'http://www.leitstellenspiel.de/vehicles/'+RTWid[i] );
	}
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

