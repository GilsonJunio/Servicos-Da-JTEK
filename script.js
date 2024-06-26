const bandeirasDosEstados = []

async function requisicao(){
	const requisicao = await fetch('https://raw.githubusercontent.com/GilsonJunio/estadosDoBrasil/main/data.json');
	console.log(requisicao)
	
	}

requisicao()
