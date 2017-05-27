/*
 * dwajax.js, r1.1
 * by 220, GPLv3
 * 
 * 2-2-0.online
 * github.com/2-2-0
 * 
 * Copyright 2017 220 <u220@Espartaco>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

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
		param_line+= "&";
		param_line+= arguments [i]+"=";
		param_line+= document.getElementById (arguments [i]).value;
	}
	return param_line;
}
