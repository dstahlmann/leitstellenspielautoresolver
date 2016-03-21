<?php

$statsFile = '../caseId.txt';
$fileHandle = fopen( $statsFile, 'a' );
$dateTime = date( 'Y-m-d H:i:s' );
$addString = PHP_EOL .$dateTime.' ID: '.$_GET['id'];
fwrite( $fileHandle, $addString );
fclose( $fileHandle );

?>