<!doctype>
<html>
<head>
	<title>respone: processing</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<script src='http://code.jquery.com/jquery-latest.min.js' type='text/javascript'></script>
	<script>
		function bootstrap(id){
			window.location.href = 'http://www.leitstellenspiel.de/missions/'+id;
		}
		setTimeout(function(){ bootstrap( <?php echo $_GET['id']?>); }, 500);
	</script>
</head>
<body>
	Units on standby.<p />
</body>
</html>
