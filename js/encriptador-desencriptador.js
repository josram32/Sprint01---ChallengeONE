
	
	function encriptar(){

		var cadena = document.getElementById("inputTextBox").value;
		
		var cadenaEncriptada ="";

		for (var i = 0; i <= cadena.length-1; i++) {
			
			if(cadena[i]=="a"){
				cadenaEncriptada+="ai"
			}
			else if(cadena[i]=="e"){
				cadenaEncriptada+="enter"
			}
			else if(cadena[i]=="i"){
				cadenaEncriptada+="imes"
			}
			else if(cadena[i]=="o"){
				cadenaEncriptada+="ober"
			}
			else if(cadena[i]=="u"){
				cadenaEncriptada+="ufat"
			}
			else{
				cadenaEncriptada += cadena[i];
			}

		}
	
		document.getElementById("resultTextBox").value = cadenaEncriptada;
	
	}

	

	function desencriptar(){

		var cadena = document.getElementById('inputTextBox').value;
		var cadenaDesencriptada ="";

		cadenaDesencriptada = cadena.replaceAll("ai", "a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");

		document.getElementById("resultTextBox").value = cadenaDesencriptada;

	}

	function copiar(){

		document.getElementById('inputTextBox').value=document.getElementById("resultTextBox").value
		document.getElementById("resultTextBox").value="";
	}

