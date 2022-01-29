// JavaScript Document

function mNav(){
	var topNav = document.getElementById("top-nav")
	var mNav = document.getElementById("unordered-list");
	var i = document.getElementById("m-nav").value;
	
	if (i == 0){
		topNav.style.width = "300px";
		topNav.style.height = "100%";
		topNav.style.borderRight = "3px solid darkred";
		mNav.style.display = "block";
		document.getElementById("m-nav").value = "1";
	} else if (i == 1){
		topNav.style.width = "300px";
		topNav.style.height = "auto";
		topNav.style.borderRight = "none";
		mNav.style.display = "none";
		document.getElementById("m-nav").value = "0";
	}
}
