//=============================================================
//Globals
//=============================================================
var hospitals = [];


//=============================================================
//Functions
//=============================================================
function bootstrap()
{
	var missionImage = $( '#missionH1 > img' );
	if( $( 'img' ).attr('vehicle_type_id') == 28 )
	{ 		
		collectHospitals();
		sortByDistance();
		if( hospitals.length >= 3 ){ hospitals = hospitals.slice( 0, 3 ); }
		transportPatient();	
	}
	
	if( $( 'img' ).attr('vehicle_type_id') == 32 )
	{ transportPrisoner(); }
	
	setTimeout( function(){ window.close(); }, 500);
}

function transportPatient()
{
	var targetHospital = Math.floor( ( Math.random() * hospitals.length ) );
	window.location.href = window.location.href +'/patient/' + hospitals[targetHospital];
}

function transportPrisoner()
{
	var targetURL = $( '#btn_to_mission_place' ).attr( 'href' );
	pathArray = location.href.split( '/' );
	protocol = pathArray[0];
	host = pathArray[2];
	url = protocol + '//' + host;
	window.location.href = url + targetURL;
}

function sortByDistance( hospital )
{
	hospitals.sort( sortHospitalByDistance );
}

function sortHospitalByDistance( hospitalA, hospitalB )
{
	if( parseInt(hospitalA[1]) > parseInt(hospitalB[1]) ){ return 1; }
    if( parseInt(hospitalA[1]) < parseInt(hospitalB[1]) ){ return -1; } 
	return 0;	
}

function collectHospitals()
{
	n = $( 'table > tbody' );
	ownHospitals = n[0].childNodes;
	allianceHospitals = n[1].childNodes;

	if( ownHospitals.length > 2 )
	{
		for( i = 0; i <= ownHospitals.length - 2; i = i + 2 )
		{
			var hospital = [];
			var hospitalId = ownHospitals[i].childNodes[9].childNodes[1].getAttribute( 'href' );
			hospital.push( hospitalId.substr( hospitalId.lastIndexOf( '/' ) + 1 ) );		
			var distance = ownHospitals[i].childNodes[3].textContent;
			hospital.push( distance.substr( 0, distance.indexOf( ',' ) ).trim() );
			
			if( ownHospitals[i].childNodes[9].childNodes[1].getAttribute( 'class' ) == 'btn btn-success' )
			{
				hospitals.push( hospital );
			}
		}
	}
	
	if( allianceHospitals.length > 2 )
	{
		for( i = 0; i <= allianceHospitals.length - 2; i = i + 2 )
		{
			var hospital = [];
			var hospitalId = allianceHospitals[i].childNodes[10].childNodes[1].getAttribute( 'href' );
			hospital.push( hospitalId.substr( hospitalId.lastIndexOf( '/' ) + 1 ) );		
			var distance = allianceHospitals[i].childNodes[3].textContent;
			hospital.push( distance.substr( 0, distance.indexOf( ',' ) ).trim() );
			
			if( allianceHospitals[i].childNodes[10].childNodes[1].getAttribute( 'class' ) == 'btn btn-success' )
			{
				hospitals.push( hospital );
			}
		}
	}
}


//=============================================================
//Initiate
//=============================================================
setTimeout( function(){ bootstrap(); }, 200 );
