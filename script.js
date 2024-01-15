const generateBtn = document.getElementById('generateBtn');

window.addEventListener('load', generarCodigoQR("https://github.com/dieloren"));
generateBtn.addEventListener('click', function() {
    if (document.getElementById('link').value != "") {
		generarCodigoQR(document.getElementById('link').value);
	};
});

function generarCodigoQR(enlace) {
	document.getElementById("codigoQR").innerHTML = "";
	var qr = new QRCode(document.getElementById("codigoQR"), {
		text: enlace,
		width: 255,
		height: 255,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
}