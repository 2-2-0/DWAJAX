// DWAJAX.js, initial release
// by 220 @ WKH, GPLv2
	
// usage:
// <div id = "div-name">original div contents</div>
// <A HREF="javascript:;" onclick="getContent ('div-name', 'new-file.html');">Click here</A>

function DW_AJAXRequest () {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		xmlhttp = null;
	}
	
	return xmlhttp;
}
function DW_AJAXReplace (xmlhttp, div_id) {
	if (xmlhttp!=null) {
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4)
			{
				document.getElementById(div_id).innerHTML=xmlhttp.responseText;
			}
		}
	} else alert ("Tu navegador no soporta AJAX.");
}
function DW_AJAXGet (xmlhttp, file_location) {
	xmlhttp.open("GET",file_location,true);
	xmlhttp.send();
}

function getContent(div_id, file_location) {
	var xmlhttp = DW_AJAXRequest ();
	DW_AJAXReplace (xmlhttp, div_id);
	DW_AJAXGet (xmlhttp, file_location);
}
function fetchForm () {
	var param_line = "";
	
	for (var i=0; i<arguments.length; i++) {
		param_line+= arguments [i]+"=";
		param_line+= document.getElementById (arguments [i]).value;
	}
	return param_line;
}
