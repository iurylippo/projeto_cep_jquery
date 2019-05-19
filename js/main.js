$(function() {
	$('#cep').blur(function(event) {
		var cep = $('#cep').val();
		var url = "http://viacep.com.br/ws/" + cep + "/json/";
		var validarcep = /^[0-9]{5}-?[0-9]{3}$/;

		if (validarcep.test(cep)) {
			$('#mensagem').hide();
			pesquisarCEP(url);
		} else {
			$('#mensagem').show();
			$('#mensagem p').html('CEP invalido!');
		}
		
	});

	function pesquisarCEP(endereco) {
		$.ajax({
			type: "GET",
			url: endereco,
			async: false
		}).done(function(data) {
			$('#ender').val(data.logradouro);
			$('#bairro').val(data.bairro);
			$('#cidade').val(data.localidade);
			$('#estado').val(data.uf);
		}).fail(function() {
			console.log('erro');
		});
	}
})


// $(function() {

// 	$('#cep').blur(function(event) {
// 		var cep = $('#cep').val();
// 		var url = "http://viacep.com.br/ws/" + cep + "/json/";
// 		var validacep = /^[0-9]{5}-?[0-9]{3}$/;
		
// 		if (validacep.test(cep)) {
// 			$('#mensagem').hide();
// 			pesquisarCEP(url);
// 		} else {
// 			$('#mensagem').show();
// 			$('#mensagem p').html('CEP Inválido  X');
// 			$('#mensagem').click(function(event) {
// 				$('#mensagem').hide();
// 			});
// 		}
		
// 	});

// 	function pesquisarCEP(endereco) {
// 		$.ajax({
// 			type: "GET",
// 			url: endereco,
// 			async: false
// 		}).done(function(data) {
// 			$('#ender').val(data.logradouro);
// 			$('#bairro').val(data.bairro);
// 			$('#cidade').val(data.localidade);
// 			$('#estado').val(data.uf);
// 		}).fail(function() {
// 			console.log("erro");
// 		});
// 	}
// });