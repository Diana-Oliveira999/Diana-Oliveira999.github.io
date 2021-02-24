function calcula_total(){
	var quant = parseInt(document.getElementById('iquantidade').value);
	var livro = document.getElementById('Livro').value;
			
			switch(livro){
					case 'Destiny: The Beginning':
						total= quant*22;
						document.getElementById('total').value = total;
					break
					case 'In The Edge of the Light':
						total= quant*25;
						document.getElementById('total').value = total;
					break
					case 'Living in the Dark':
						total= quant*27;
						document.getElementById('total').value = total;
					break
					default:
						document.getElementById('total').value = '0';	
					break
				}
}



/*function calcula_total(){
	var quant = parseInt(document.getElementById('iquantidade').value);
	total= quant*22;
	document.getElementById('total').value = total;
}*/