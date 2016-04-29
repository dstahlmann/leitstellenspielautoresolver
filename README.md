# leitstellenspielautoresolver

### Inhalt
* Ziel des Projektes
* Installation
* Die AAO (Alarm- und Aursückeordnung) erstellen
* Was ist zu beachten

## Ziel des Projektes
Ziel des Projektes ist es das Browsergame leitstellenspiel.de bzw. missionchief.com automatisiert laufen zu lassen. Genutzt habe ich die Möglichkeit um mir Javascript und jQuery anzueignen.
Die Verwendung ist vom Spieleentwickler nicht genehmigt.

## Installation
* Projektdaten herunterladen,
* falls nicht vorhanden PHP installieren,
** unter Windows ist es erforderlich PHP in die PATH-Variable zu schreiben
* die AAO-Plan.xlsx Datei mit den ID's der eigenen AAO-Buttons ersetzen. Weiteren Informationen unter **Die AAO (Alarm- und Aursückeordnung) erstellen**,
* entsprechend des Browsers
**Firefox[/u]: https://addons.mozilla.org/de/firefox/addon/greasemonkey/,
**Google Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=de,
**Opera: https://addons.opera.com/de/extensions/details/violent-monkey/ oder
**Safari: http://tampermonkey.net/ im Browser installieren
* die Greasemonky-Scripte installieren,
* die webservice.bat (Windows) ausführen / unter Unix entsprechend Webdienst auf localhost:8668 starten
* leistellenspiel.de / missionchief.com aufrufen

## Die AAO (Alarm- und Aursückeordnung) erstellen
Es werden entsprechend der AAO-Plan.xlsx die AAO aus Zeile 5 mit den genannten Fahrzeugen in der in Zeile 3 angegebenen Menge benötigt. Dementsprechend wäre die erste AAO 1 LF, die 5 wären 16 LF.
Hier wird auf eine Binäre zählweise zurückgegriffen, dass mit wenigen AAO entsprechend viele Fahrzeuge alarmiert werden können. Die Exelliste gliedert immer in Blöcken zu je 6 AAO, was dem Spiel
geschuldet ist. Hier sind bis zu 6 Reihen für die AAO möglich.

Wenn die aao_xxxxxx aus Zeile 4 euren AAO ID's entsprechen (die Nummern lassen sich durch untersuchen des Quelltextes herausfinden) muss über den Reiter "Export" eine CSV-Datei gespeichert werden.
Hier beginnt nun ein wenig Fleißarbeit:

1 die Überflüssigen ; mittel Suchen von ";;" und ersetzen durch ";" reduzieren,
2 die ";" durch "', '"ersetzen,
3 vor jeden Zeilenbeginn <code>localStorage.setItem( '</code> schreiben,
4 hinter jedes Alarmstichwort ein "'" schreiben,
5 vor jeden AAO id <code>, JSON.stringify( [ '</code> schreiben,
6 jede Zeile mit <code>' ] ) );</code> beenden,

Das Ergebnis sollte der Auflistung in der gm_scripts/autoResponderLocalStorage.user.js entsprechen. Eure Auflistung muss nun durch die vorgegebene ersetzt werden.


## Was ist zu beachten
Durch regelmäßige Updates im Spiel ist eine volle Funktionsfähigkeit nicht gewährleistet. Weiterhin kommt es im Script immer wieder zu Fehlern das endlos viele Browserfenster geöffnet werden.
Das Script bedarf einer gelegentlichen Kontrolle, da nicht alle Einsätze Problemlos abgearbeitet werden können, da nur ein Mal pro Einsatz alarmiert wird. Fehlt ein benötigtes Fahrzeug wird dieses nicht nachalarmiert.
Aus diesem Grund ist es ratsam  die unter Fahrzeug und Bedarfsplan genannte Gebäudestruktur zu etablieren. Mit dieser Struktur habe ich zur Zeit die besten Ergebnisse erziehlt.
Auf eine Haupt- und Nebenwache sollten etwa 2-3 Löschgruppen / Freiwillige Feuerwehren und 0,2 CBRN-Züge kommen.

