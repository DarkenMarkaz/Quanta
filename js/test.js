// JavaScript Document

function vis(){
	var thebox = document.getElementById("box");
	var i = document.getElementById("vis").value;
	
	if (i == 0){
		thebox.style.display = "none";
		document.getElementById("vis").value = "1";
		
	} else if (1 == 1){
		thebox.style.display = "block";
		document.getElementById("vis").value = "0";
	}
}

function moveh(){
	var thebox = document.getElementById("box");
	var i = document.getElementById("moveh").value;
	
	if (i == 0){
		thebox.style.width = "1000px";
		document.getElementById("moveh").value = "1";
		
	} else if (1 == 1){
		thebox.style.width = "500px";
		document.getElementById("moveh").value = "0";
	}
}

function movev(){
	var thebox = document.getElementById("box");
	var i = document.getElementById("movev").value;
	
	if (i == 0){
		thebox.style.height = "1000px";
		document.getElementById("movev").value = "1";
		
	} else if (1 == 1){
		thebox.style.height = "500px";
		document.getElementById("movev").value = "0";
	}
}

function round(){
	var thebox = document.getElementById("box");
	var i = document.getElementById("round").value;
	
	if (i == 0){
		thebox.style.borderRadius = "250px";
		document.getElementById("round").value = "1";
		
	} else if (1 == 1){
		thebox.style.borderRadius = "0px";
		document.getElementById("round").value = "0";
	}
}
