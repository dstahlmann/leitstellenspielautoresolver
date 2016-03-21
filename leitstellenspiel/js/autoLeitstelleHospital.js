//=============================================================
//Globals
//=============================================================
var hospitalId = [
	'1109352', 	// Krankenhaus "Lukas Krankenhaus"
	'974509',	// Krankenhaus "Ev. Krankenhaus Enger"
	'1016818',	// Krankenhaus "DRK Medical Centre Herford"
	'24937',	// Krankenhaus "Bad Oeynhausen"
	'39052',	// Krankenhaus "Herford 2"
	'199337'	// Krankenhaus "Herford 1"
];

//=============================================================
//Functions
//=============================================================
function bootstrap()
{
	var missionImage = $( '#missionH1 > img' );
	if( $( '#iframe-inside-container > div' ).hasClass( 'alert alert-info' ) )
	{ transportPatient(); }
	
	//if( $( '#btn_to_mission_place' ) )
	//{ transportPrisoner(); }
	
	setTimeout( function(){ window.close(); }, 300);
}

function transportPatient()
{
	var targetHospital = Math.floor( ( Math.random() * hospitalId.length ) );
	window.location.href = window.location.href +'/patient/' + hospitalId[targetHospital];
}

function transportPrisoner()
{
	$( '#btn_to_mission_place' ).click();
}


//=============================================================
//Initiate
//=============================================================
setTimeout( function(){ bootstrap(); }, 200 );

