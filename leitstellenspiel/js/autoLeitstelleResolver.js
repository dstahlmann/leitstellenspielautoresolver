//=============================================================
//Globals
//=============================================================

var keyword = {
	'akuter Asthma-Anfall'							: [ 'aao_613072', 'aao_613197' ],
	'Akuter Harnstau'								: [ 'aao_613072' ],
	'Alkoholintoxikation'							: [ 'aao_613072' ],
	'Ampelausfall'									: [ 'aao_612371' ],
	'Angefahrene Person'							: [ 'aao_612371', 'aao_613072', 'aao_613197' ],
	'Äste auf Fahrbahn'								: [ 'aao_606948' ],
	'Auffahrunfall'									: [ 'aao_606948', 'aao_612371', 'aao_613072' ],
	'Aufgerissener Öltank'							: [ 'aao_610008', 'aao_612040', 'aao_612329' ],
	'Ausgedehnte Ölspur'							: [ 'aao_612000', 'aao_612040', 'aao_612329', 'aao_612372' ],
	'Auslaufende Betriebsstoffe'					: [ 'aao_606948' ],
	'Baum auf Dach'									: [ 'aao_606948', 'aao_612014' ],
	'Baum auf Gleisen'								: [ 'aao_606948', 'aao_612371' ],
	'Baum auf PKW'									: [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ],
	'Baum auf Radweg'								: [ 'aao_606948' ],
	'Baum auf Straße'								: [ 'aao_606948', 'aao_612035' ],
	'Beginnende Geburt'								: [ 'aao_613072', 'aao_613197' ],
	'Beschädigter Dachbereich'						: [ 'aao_609581', 'aao_612014', 'aao_612040', 'aao_612328', 'aao_612371' ],
	'Bewusstloser Kranführer'						: [ 'aao_606948', 'aao_612040', 'aao_612328', 'aao_612371', 'aao_613072', 'aao_613197' ],
	'Brand auf Weihnachtsmarkt'						: [ 'aao_606948', 'aao_613072', 'aao_613197' ],
	'Brand im Supermarkt'							: [ 'aao_610008', 'aao_612014', 'aao_612035', 'aao_612040', 'aao_612336', 'aao_613072' ],
	'Brand in Briefkasten'							: [ 'aao_606948' ],
	'Brand in Werkstatt'							: [ 'aao_610396', 'aao_612014', 'aao_612035', 'aao_612040', 'aao_612297', 'aao_613072', 'aao_613197' ],
	'Brennende Hecke'								: [ 'aao_606948' ],
	'Brennende Lok'									: [ 'aao_610396', 'aao_612035', 'aao_612040', 'aao_612297', 'aao_612321', 'aao_612324', 'aao_613072' ],
	'Brennende Papiercontainer'						: [ 'aao_606948' ],
	'Brennende Telefonzelle'						: [ 'aao_606948' ],
	'Brennende Trafostation'						: [ 'aao_609581', 'aao_612014', 'aao_612371', 'aao_612040' ],
	'Brennende Vogelscheuche'						: [ 'aao_606948' ],
	'Brennende Weihnachtsmarktbude'					: [ 'aao_609581', 'aao_613072', 'aao_613197' ],
	'Brennender Adventskranz'						: [ 'aao_606948' ],
	'Brennender Anhänger'							: [ 'aao_606948' ],
	'Brennender Bollerwagen'						: [ 'aao_606948' ],
	'Brennender Bus'								: [ 'aao_611999', 'aao_612035', 'aao_612040', 'aao_612297', 'aao_612372', 'aao_613077', 'aao_613219' ],
	'Brennender Güteranhänger'						: [ 'aao_610396', 'aao_612014', 'aao_612036', 'aao_612040', 'aao_612336', 'aao_612338' ],
	'Brennender LKW'								: [ 'aao_609581' ],
	'Brennender PKW'								: [ 'aao_606948' ],
	'Brennender Tannenbaum'							: [ 'aao_606948' ],
	'Brennendes Bus-Häuschen'						: [ 'aao_606948' ],
	'Brennendes Gebüsch'							: [ 'aao_606948' ],
	'Brennendes Gras'								: [ 'aao_606948' ],
	'Brennendes Kürbisfeld'							: [ 'aao_609581' ],
	'Brennendes Laub'								: [ 'aao_606948' ],
	'Brennendes Reetdachhaus'						: [ 'aao_611999', 'aao_612014', 'aao_612040', 'aao_612324', 'aao_612372', 'aao_613073', 'aao_613197' ],
	'Containerbrand'								: [ 'aao_606948' ],
	'Dachstuhlbrand'								: [ 'aao_610008', 'aao_612014', 'aao_612040' ],
	'Diebstahl auf Weihnachtsmarkt'					: [ 'aao_612371' ],
	'Diebstahl aus Kfz'								: [ 'aao_612371' ],
	'Einbruch in Keller'							: [ 'aao_612371' ],
	'Einbruch in Wohnung'							: [ 'aao_612371' ],
	'Eingestürztes Wohnhaus'						: [ 'aao_610008', 'aao_612014', 'aao_612035', 'aao_612040', 'aao_612372', 'aao_613075', 'aao_613207', 'aao_613208', 'aao_613211', 'aao_613212', 'aao_613214', 'aao_613219' ],
	'Erdrutsch'										: [ 'aao_612372', 'aao_613206', 'aao_613210', 'aao_613212', 'aao_613213', 'aao_613219' ],
	'Fahrraddiebstahl'								: [ 'aao_612371' ],
	'Fassadenteile drohen zu fallen'				: [ 'aao_606948', 'aao_612014', 'aao_612040', 'aao_612328', 'aao_612371' ],
	'Fettbrand in Pommesbude'						: [ 'aao_606948' ],
	'Fettbrand in Pommesbude (Brandmeldeanlage)'	: [ 'aao_606948' ],
	'Feuer auf Balkon'								: [ 'aao_609581', 'aao_612014' ],
	'Feuer auf Bauernhof - Groß'					: [ 'aao_612004', 'aao_612021', 'aao_612042', 'aao_612297', 'aao_612310', 'aao_612323', 'aao_612325', 'aao_612375', 'aao_613073', 'aao_613207', 'aao_613211', 'aao_613212', 'aao_613214', 'aao_613219' ],
	'Feuer auf Bauernhof - Mittel'					: [ 'aao_612002', 'aao_612019', 'aao_612040', 'aao_612321', 'aao_612324', 'aao_612375', 'aao_613073', 'aao_613219' ],
	'Feuer im Krankenhaus'							: [ 'aao_610396', 'aao_612014', 'aao_612036', 'aao_612040', 'aao_612297', 'aao_612372' ],
	'Feuer im Lagerraum'							: [ 'aao_609581', 'aao_612014', 'aao_612040', 'aao_612336' ],
	'Brand im Supermarkt'							: [ 'aao_610008', 'aao_612014', 'aao_612035', 'aao_612040', 'aao_612336', 'aao_613072' ],
	'Brand im Supermarkt (Brandmeldeanlage)'		: [ 'aao_610008', 'aao_612014', 'aao_612035', 'aao_612040', 'aao_612336', 'aao_613072' ],
	'Feuer in Einfamilienhaus'						: [ 'aao_610008', 'aao_612014', 'aao_612040', 'aao_613073' ],
	'Feuer in Schnellrestaurant'					: [ 'aao_610008', 'aao_613072' ],
	'Feuer in Schnellrestaurant (Brandmeldeanlage)'	: [ 'aao_610008' ],
	'Fieber'										: [ 'aao_613072', 'aao_613197' ],
	'Flächenbrand'									: [ 'aao_610396', 'aao_612040', 'aao_612321', 'aao_612372' ],
	'Frankenstein gesichtet'						: [ 'aao_612375' ],
	'Fußball Bundesliga-Spiel'						: [ 'aao_612372', 'aao_612390', 'aao_612391', 'aao_612394', 'aao_612399' ],
	'Garagenbrand'									: [ 'aao_609581' ],
	'Gartenlaubenbrand'								: [ 'aao_609581' ],
	'Gefahrgut-LKW verunglückt'						: [ 'aao_610008', 'aao_612035', 'aao_612040', 'aao_612297', 'aao_612334', 'aao_612336', 'aao_612338', 'aao_612372', 'aao_613206', 'aao_613210', 'aao_613213', 'aao_613219' ],
	'Gehirnerschütterung'							: [ 'aao_613072', 'aao_613197' ],
	'Geländedurchsuchung nach Beweismittel'			: [ 'aao_612388', 'aao_612397' ],
	'Geplante Razzia'								: [ 'aao_612372', 'aao_612389', 'aao_612391', 'aao_612398' ],
	'Gestürzte Person'								: [ 'aao_613072' ],
	'Gestürzter Fußgänger'							: [ 'aao_613072' ],
	'Gestürzter Radfahrer'							: [ 'aao_613072' ],
	'Großbrand'										: [ 'aao_612000', 'aao_612019', 'aao_612042', 'aao_612321', 'aao_612324', 'aao_612331' ],
	'Große Ölspur'									: [ 'aao_609581', 'aao_612329' ],
	'Großer Feldbrand'								: [ 'aao_611999', 'aao_612040', 'aao_612302', 'aao_612321', 'aao_612371' ],
	'Großer Waldbrand'								: [ 'aao_610008', 'aao_612040', 'aao_612321', 'aao_612371' ],
	'Großfeuer im Wald'								: [ 'aao_612003', 'aao_612014', 'aao_612042', 'aao_612297', 'aao_612302', 'aao_612321', 'aao_612324', 'aao_612376', 'aao_613072' ],
	'Harnleiter Blutung'							: [ 'aao_613072', 'aao_613197' ],
	'Hausfriedensbruch'								: [ 'aao_612371' ],
	'Häusliche Gewalt'								: [ 'aao_612372', 'aao_613072' ],
	'Herzinfarkt'									: [ 'aao_613072', 'aao_613197' ],
	'Herzrhythmusstörungen'							: [ 'aao_613072', 'aao_613197' ],
	'Hexe hängt in Baum'							: [ 'aao_606948', 'aao_612014', 'aao_613072' ],
	'Hilflose Person'								: [ 'aao_612371', 'aao_613072' ],
	'Hitzekrampf'									: [ 'aao_613072', 'aao_613197' ],
	'Hitzschlag'									: [ 'aao_613072', 'aao_613197' ],
	'Jugendschutzkontrolle in Diskothek'			: [ 'aao_612372', 'aao_612388', 'aao_612397' ],
	'Kaminbrand'									: [ 'aao_606948', 'aao_612014', 'aao_612040' ],
	'Keller unter Wasser'							: [ 'aao_606948' ],
	'Kellerbrand'									: [ 'aao_610008', 'aao_612040', 'aao_613072' ],
	'Kleine Ölspur'									: [ 'aao_606948' ],
	'Kleiner Feldbrand'								: [ 'aao_609581' ],
	'Kleiner Waldbrand'								: [ 'aao_606948' ],
	'Kleinflugzeug abgestürzt'						: [ 'aao_610008', 'aao_612035', 'aao_612040', 'aao_612297', 'aao_612372', 'aao_613075', 'aao_613219' ],
	'Kleintier in Not'								: [ 'aao_606948', 'aao_612014' ],
	'Kopfplatzwunde'								: [ 'aao_613072' ],
	'Krampfanfall'									: [ 'aao_613072', 'aao_613197' ],
	'Küchenbrand'									: [ 'aao_609581', 'aao_612371' ],
	'Kürbisse geklaut'								: [ 'aao_612371' ],
	'Kürbissuppe übergekocht'						: [ 'aao_606948', 'aao_612040', 'aao_612324', 'aao_613072' ],
	'Ladendiebstahl'								: [ 'aao_612371' ],
	'Lagerhallenbrand'								: [ 'aao_611999', 'aao_612014', 'aao_612035', 'aao_612042', 'aao_612297', 'aao_612321', 'aao_612324', 'aao_612336', 'aao_612372', 'aao_613072', 'aao_613206', 'aao_613210', 'aao_613212', 'aao_613213', 'aao_613218', 'aao_613219' ],
	'LKW Auffahrunfall'								: [ 'aao_610008', 'aao_612035', 'aao_612040', 'aao_612329', 'aao_612334', 'aao_612372' ],
	'LKW in Hauswand'								: [ 'aao_609581', 'aao_612014', 'aao_612040', 'aao_613206', 'aao_613208', 'aao_613212', 'aao_613219' ],
	'LKW umgestürzt'								: [ 'aao_609581', 'aao_612035', 'aao_612040', 'aao_612372' ],
	'Mähdrescher Brand'								: [ 'aao_609581' ],
	'Maschinenbrand'								: [ 'aao_610008', 'aao_612035', 'aao_612040', 'aao_612321', 'aao_612324' ],
	'Massenschlägerei'								: [ 'aao_612377', 'aao_613074' ],
	'Metalldiebstahl'								: [ 'aao_612371' ],
	'Mittlerer Feldbrand'							: [ 'aao_610008', 'aao_612040', 'aao_612302', 'aao_612321' ],
	'Monster ausgebrochen'							: [ 'aao_612376' ],
	'Motorrad-Brand'								: [ 'aao_606948' ],
	'Motorradunfall'								: [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ],
	'Mülleimerbrand'								: [ 'aao_606948' ],
	'Nasenbluten unstillbar'						: [ 'aao_613072' ],
	'Notebook aus Schule entwendet'					: [ 'aao_612371' ],
	'Pannenfahrzeug'								: [ 'aao_612371' ],
	'Parkdeck voll Wasser gelaufen'					: [ 'aao_606948', 'aao_612297', 'aao_612321', 'aao_612329', 'aao_612372' ],
	'Parkendes Auto gerammt'						: [ 'aao_612371' ],
	'Person hinter Tür'								: [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ],
	'Person unter Baum eingeklemmt'					: [ 'aao_606948', 'aao_612371', 'aao_613072', 'aao_613197' ],
	'Personalienaufnahme von Schwarzfahrer'			: [ 'aao_612371' ],
	'Personenkontrolle'								: [ 'aao_612371' ],
	'Präsenzeinsatz Volksfest'						: [ 'aao_612388', 'aao_612397' ],
	'Randalierende Person'							: [ 'aao_612372' ],
	'Rangelei auf Weihnachtsmarkt'					: [ 'aao_612372', 'aao_613073' ],
	'Raub'											: [ 'aao_612375' ],
	'Rauchentwicklung in Museum'					: [ 'aao_610008', 'aao_612014', 'aao_612040', 'aao_612324', 'aao_612372', 'aao_613075', 'aao_613219' ],
	'Ruhestörung'									: [ 'aao_612371' ],
	'Sachbeschädigung'								: [ 'aao_612371' ],
	'Schädelverletzung'								: [ 'aao_613072', 'aao_613197' ],
	'Scheunenbrand'									: [ 'aao_610396', 'aao_612014', 'aao_612040', 'aao_612302', 'aao_612324', 'aao_613072' ],
	'Schlaganfall'									: [ 'aao_613072', 'aao_613197' ],
	'Schlägerei'									: [ 'aao_612375', 'aao_613074' ],
	'Schornsteinbrand'								: [ 'aao_606948', 'aao_612014', 'aao_612040' ],
	'Schwangere in Notsituation'					: [ 'aao_613072', 'aao_613197' ],
	'Schwerpunkteinsatz Tageswohnungseinbrüche'		: [ 'aao_612388', 'aao_612397' ],
	'Schwerpunktseinsatz Verkehrsüberwachung'		: [ 'aao_612388', 'aao_612397' ],
	'Sonnenstich'									: [ 'aao_613072' ],
	'Sperrmüllbrand'								: [ 'aao_606948' ],
	'Sporthallenbrand'								: [ 'aao_612002', 'aao_612019', 'aao_612040', 'aao_612297', 'aao_612321', 'aao_612324', 'aao_613219' ],
	'Straße unter Wasser'							: [ 'aao_606948', 'aao_612372' ],
	'Strohballen Brand'								: [ 'aao_606948' ],
	'Sturz aus Höhe'								: [ 'aao_613072', 'aao_613197', 'aao_613199' ],
	'Süßigkeitendiebstahl'							: [ 'aao_612371' ],
	'Tankstellenbrand'								: [ 'aao_610396', 'aao_612014', 'aao_612036', 'aao_612040', 'aao_612297', 'aao_612334', 'aao_612336' ],
	'Taschendiebstahl'								: [ 'aao_612371' ],
	'Tiefgarage unter Wasser'						: [ 'aao_606948' ],
	'Traktor Brand'									: [ 'aao_606948' ],
	'Trunkenheitsfahrt'								: [ 'aao_612371' ],
	'Umherfliegendes Baumaterial'					: [ 'aao_606948' ],
	'Vaginale Blutung'								: [ 'aao_613072', 'aao_613197' ],
	'Verkehrsbehinderung'							: [ 'aao_612371' ],
	'Verkehrsunfall'								: [ 'aao_609581', 'aao_612035', 'aao_612372', 'aao_613073' ],
	'Verkehrsunfall durch Glatteis'					: [ 'aao_606948', 'aao_612035', 'aao_613074' ],
	'Verletzte Person auf Baugerüst'				: [ 'aao_606948', 'aao_612014', 'aao_612040', 'aao_612328', 'aao_613072', 'aao_613197' ],
	'Wirbelsäulenverletzung'						: [ 'aao_613072', 'aao_613197', 'aao_613199' ],
	'Wohnwagenbrand'								: [ 'aao_609581' ],
	'Zimmerbrand'									: [ 'aao_609581', 'aao_612014', 'aao_613072' ],
	'Zombiebiss'									: [ 'aao_613072' ],
	//Krankentransport
	'Krankentransport'								: [ 'aao_613205' ]
	
};

//=============================================================
//Functions
//=============================================================
function bootstrap()
{
	var missionImage = $( '#missionH1 > img' );
	if( missionImage[0].getAttribute( 'src' ).indexOf('rot') == -1 )
	{ goBack(); }
	else
	{ responseEmergency(); }
}

function responseEmergency()
{
	$( 'img' ).remove();
	$( 'small' ).remove();
	var situation = $( '#missionH1' ).text().trim();
	if( situation.lastIndexOf( ' (Brandmeldeanlage)' ) != -1 )
	{
		situation = situation.substr( 0, situation.lastIndexOf( ' (Brandmeldeanlage)' ) );
	}
	getAAO( situation );
	setTimeout( function(){ $( '#mission_alarm_btn' ).click(); }, 1000 );	
}

function getAAO( emergencyCase )
{
	var aaokeys = keyword[emergencyCase];
	aaokeys.forEach( clickButton );
}

function clickButton( buttonId )
{
	$( '#'+buttonId ).click();
}

function goBack()
{	
	window.location.href = 'http://localhost:8668/localPages/goBack.php';
}

function timer()
{
	return Math.floor( Math.random() * 1000 + Math.random() * 1000 );
}

String.prototype.trim = function () {
    return this.replace(/^\s+/g, '').replace(/\s+$/g, '');
}


//=============================================================
//Initiate
//=============================================================
setTimeout(function(){ bootstrap(); }, timer());


//overwrite alert
window.alert=function(){var H=2.4;var D={button_title:"ok",callback:function(){},left:-1,top:-1,width:-1,height:-1,modal:true,timeout:0};if(arguments.length==2&&typeof arguments[1]=="object"){D=J(arguments[1],D)}else{if(arguments.length==3){D=J(arguments[2],D)}}window.alert_callback=D.callback;if(arguments.length==1||(arguments.length==2&&typeof arguments[1]!="string")){arguments=["",arguments[0]]}var A=document.getElementById("alert");if(A){document.body.removeChild(A)}if(D.modal){var F=document.createElement("DIV");F.id="alert-modal";F.className="alert-modal";document.body.appendChild(F)}A=document.createElement("DIV");A.id=A.className="alert";document.body.appendChild(A);A.innerHTML=(arguments[0]==""?"":'<div class="title">'+arguments[0]+"</div>")+'<div class="body">'+arguments[1]+'</div><div class="button"><a id="close_alert" href="" onclick="var _m3423=document.getElementById(\'alert-modal\');if(_m3423)document.body.removeChild(_m3423);document.body.removeChild(document.getElementById(\'alert\'));alert_callback();return false;">'+D.button_title+"</a></div>";var B=G(),K=Math.max(I(arguments[0]),I(arguments[1]))*6,C=0,E=0;if(D.width==-1){D.width=K}else{C=D.width;K=0}if(D.left==-1){D.left=parseInt((B[0]+B[2]-K-C)/2)}A.style.display="block";if(D.top==-1){D.top=parseInt(((B[1]+B[3]-(D.height==-1?0:(D.height/2)))/2)-(A.pixelHeight||A.offsetHeight))}A.style.width=D.width+"px";if(D.height>0){A.style.height=D.height+"px"}A.style.left=D.left+"px";A.style.top=D.top+"px";function J(M,L){for(var N in L){if(N in M){continue}M[N]=L[N]}return M}function I(O){var P=O.split("<br />");if(P.length<=1){P=O.split("<br>")}if(P.length<=1){return O.replace(/<(?:.|\s)*?>/g,"").length}var L=0;for(var N=0;N<P.length;N++){var M=P[N].replace(/<(?:.|\s)*?>/g,"");if(M.length>L){L=M.length}}return L}function G(){var M=0,N=0,L=0,O=0;if(typeof window.innerWidth=="number"){M=window.innerWidth;N=window.innerHeight}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){M=document.documentElement.clientWidth;N=document.documentElement.clientHeight}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){M=document.body.clientWidth;N=document.body.clientHeight}}}if(typeof window.pageYOffset=="number"){O=window.pageYOffset;L=window.pageXOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){O=document.body.scrollTop;L=document.body.scrollLeft}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){O=document.documentElement.scrollTop;L=document.documentElement.scrollLeft}}}return[L,O,M,N]}};