// JavaScript Document

var akVideosPart = localStorage.getItem("akVideoPartList");

function filt01(){
	document.getElementById("filt01").disabled = true;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt06").disabled = false;
	
	if(akVideosPart == "1"){
		document.getElementById("filt05").disabled = true;
		
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs01-playlist/postAll.html";
	}
	if(akVideosPart == "2"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs02-playlist/postAll.html";
	}
	if(akVideosPart == "3"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs03-playlist/postAll.html";
	}
}
function filt02(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = true;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt06").disabled = false;
	
	if(akVideosPart == "1"){
		document.getElementById("filt05").disabled = true;
		
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs01-playlist/postTrailer.html";
	}
	if(akVideosPart == "2"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs02-playlist/postTrailer.html";
	}
	if(akVideosPart == "3"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs03-playlist/postTrailer.html";
	}
}
function filt03(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = true;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt06").disabled = false;
	
	if(akVideosPart == "1"){
		document.getElementById("filt05").disabled = true;
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs01-playlist/postPVs.html";
	}
	if(akVideosPart == "2"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs02-playlist/postPVs.html";
	}
	if(akVideosPart == "3"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs03-playlist/postPVs.html";
	}
}
function filt04(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = true;
	document.getElementById("filt05").disabled = true;
	document.getElementById("filt06").disabled = false;
	
	if(akVideosPart == "1"){
		document.getElementById("filt05").disabled = true;
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs01-playlist/postAnimes.html";
	}
	if(akVideosPart == "2"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs02-playlist/postAnimes.html";
	}
	if(akVideosPart == "3"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs03-playlist/postAnimes.html";
	}
}
function filt05(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt05").disabled = true;
	document.getElementById("filt06").disabled = false;
	
	if(akVideosPart == "1"){
		document.getElementById("filt05").disabled = true;
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs01-playlist/post3dAnimes.html";
	}
	if(akVideosPart == "2"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs02-playlist/post3dAnimes.html";
	}
	if(akVideosPart == "3"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs03-playlist/post3dAnimes.html";
	}
}
function filt06(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt05").disabled = true;
	document.getElementById("filt06").disabled = true;
	
	if(akVideosPart == "1"){
		document.getElementById("filt05").disabled = true;
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs01-playlist/postRerun.html";
	}
	if(akVideosPart == "2"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs02-playlist/postRerun.html";
	}
	if(akVideosPart == "3"){
		document.getElementById("switchable-playlist").src = "postPVs-playlist/postPVs03-playlist/postRerun.html";
	}
}





