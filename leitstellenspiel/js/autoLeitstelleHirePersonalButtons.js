//=============================================================
//Globals
//=============================================================

noFurtherPersonal_BildingIDs = [
	'1095831',	// DRK Bünde
	'1132553',	// DRK Spenge
	'1149856',	// DRK Minden
	'1159886',	// DRK Vlotho
	'1183274',	// DRK Löhne
	'1151896',	// Rettungswache Porta Westfalica
	'1196093',	// Christoph Niedersachsen
	'1226851',	// Christoph Westfalen
	'1126096',	// BePo Minden
	'1170953',	// BePo Minden
	'1136920',	// THW OV Minden
	'1143694',	// THW OV Bünde
	'1127077',	// Polizeiwache Minden
	'1182309',	// Polizeiwache Porta Westfalica
	'1086158',	// Polizeiwache Spenge
	'1098462',	// Polizeiwache Bünde
	'1135452',	// Polizeiwache Enger
	'1131059',	// Polizeiwache Löhne
	'1179044',	// Polizeiwache Vlotho
	'1213334',	// Polizeiwache Bad Oeynhausen
	'1223028',	// Polizeiwache Herford
	'398091'	// LG Spenge-Mitte (Altbau)
 ];
 
 hirePersonal_BildingIDs = [	
	'1105424',	// Hauptwache Bünde
	'1148865',	// Hauptwache Bünde (Nebengebäude)
	'1091131',	// Hauptwache Minden
	'1140955',	// Hauptwache Minden (Nebengebäude)
	'1172729',	// LG Barkenhausen
	'1129710',	// LG Löhne
	'1172712',	// LG Oberbecksen	
	'1089086',	// LG Spenge-Mitte (Neubau)
	'1212245',	// LG Eilshausen
	'1223058',	// Rettungwache Herford
	'1218686',	// THW OV Vlotho
	'1210567'	// Hauptwache Minden (CBRN)
 ];
 
 
//=============================================================
//Functions
//=============================================================
 function bootstrap()
 {
	noFurtherPersonal_BildingIDs.forEach( markNoFurtherPersonalNeeded );
	hirePersonal_BildingIDs.forEach( hirePersonal );
 }

function markNoFurtherPersonalNeeded( buildingId )
{
	building = $( "a[href='/buildings/"+ buildingId +"']" ).closest('tr').get(0).childNodes[7];
	building.innerHTML = "<span style='font-weight: bold; color: #ff0000'>KEIN WEITERES PERSONAL ERFORDERLICH</span>";
}

function hirePersonal( buildingId )
{
	building = $( "a[href='/buildings/"+ buildingId +"']" ).closest('tr').get(0).childNodes[7];
	if( building.innerHTML.trim() != "1 Tage" && building.innerHTML.trim() != "2 Tage" && building.innerHTML.trim() != "3 Tage" )
	{
		innerHTMLString = "<div class='btn-group'>";
		innerHTMLString += "<a href='http://localhost:8668/localPages/hirePersonal.php?buildingId=" + buildingId + "&days=1' class='btn-default btn btn-xs'>1 Tag</a>";
		innerHTMLString += "<a href='http://localhost:8668/localPages/hirePersonal.php?buildingId=" + buildingId + "&days=2' class='btn-default btn btn-xs'>2 Tage</a>";
		innerHTMLString += "<a href='http://localhost:8668/localPages/hirePersonal.php?buildingId=" + buildingId + "&days=3' class='btn-default btn btn-xs'>3 Tage</a></div>";
		building.innerHTML = innerHTMLString;
	}	
}


//=============================================================
//Initiate
//=============================================================
bootstrap();