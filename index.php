<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>projeto CEP</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div class="container">
		<h1>Consulta de CEP</h1>
		<div id="mensagem"><p></p></div>
		<form method="">
			
			<div class="input-form">
				Cep: <input type="text" id="cep" value=""> 
				Endereço: <input type="text" id="ender" value="" disabled="">
			</div>
			<br>
			<div class="input-form">
				Bairro: <input type="text" id="bairro" value="" disabled="">
				Cidade: <input type="text" id="cidade" value="" disabled="">
				Estado: <input type="text" id="estado" value="" disabled="">
				Complemento: <input type="text">
			</div>
			<br>
			<input type="submit">

		</form>
	</div>
	

	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/jquery.maskedinput-1.1.4.pack.js"></script>
	<script src="js/main.js"></script>
</body>
</html>