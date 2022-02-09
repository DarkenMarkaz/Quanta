// JavaScript Document

function filt01(){
	document.getElementById("filt01").disabled = true;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt05").disabled = false;
	
	document.getElementById("playlist-all").style.display = "block";
	document.getElementById("playlist-trailer").style.display = "none";
	document.getElementById("playlist-pv").style.display = "none";
	document.getElementById("playlist-anime").style.display = "none";
	document.getElementById("playlist-rerun").style.display = "none";
}
function filt02(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = true;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt05").disabled = false;
	
	document.getElementById("playlist-all").style.display = "none";
	document.getElementById("playlist-trailer").style.display = "block";
	document.getElementById("playlist-pv").style.display = "none";
	document.getElementById("playlist-anime").style.display = "none";
	document.getElementById("playlist-rerun").style.display = "none";
}
function filt03(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = true;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt05").disabled = false;
	
	document.getElementById("playlist-all").style.display = "none";
	document.getElementById("playlist-trailer").style.display = "none";
	document.getElementById("playlist-pv").style.display = "block";
	document.getElementById("playlist-anime").style.display = "none";
	document.getElementById("playlist-rerun").style.display = "none";
}
function filt04(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = true;
	document.getElementById("filt05").disabled = false;
	
	document.getElementById("playlist-all").style.display = "none";
	document.getElementById("playlist-trailer").style.display = "none";
	document.getElementById("playlist-pv").style.display = "none";
	document.getElementById("playlist-anime").style.display = "block";
	document.getElementById("playlist-rerun").style.display = "none";
}
function filt05(){
	document.getElementById("filt01").disabled = false;
	document.getElementById("filt02").disabled = false;
	document.getElementById("filt03").disabled = false;
	document.getElementById("filt04").disabled = false;
	document.getElementById("filt05").disabled = true;
	
	document.getElementById("playlist-all").style.display = "none";
	document.getElementById("playlist-trailer").style.display = "none";
	document.getElementById("playlist-pv").style.display = "none";
	document.getElementById("playlist-anime").style.display = "none";
	document.getElementById("playlist-rerun").style.display = "block";
}

//===========================================================================================================================================================================

function all01(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/uySJpmfM7q4?autoplay=1";
	document.getElementById("video-title").innerHTML = "Trailer: Concept Trailer 1";
}
function all02(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/mvivPy7j6_Q?autoplay=1";
	document.getElementById("video-title").innerHTML = "Trailer: Concept Trailer 2";
}
function all03(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/zclYeBTcN7c?autoplay=1";
	document.getElementById("video-title").innerHTML = "Animation Trailer";
}
function all04(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/YJEIYLH8OMg?autoplay=1";
	document.getElementById("video-title").innerHTML = "Episode 5: Necessary Solution";
}
function all05(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/PCkOtRDvtjw?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Grani and the Knight's Treasure";
}

//===========================================================================================================================================================================

function all06(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/lLSaBSdbKZ8?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Operatinal Intellingent";
}
function all07(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/soODvXnyR7g?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Heart of Surging Flame";
}
function all08(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/SJ1qvqEmkVQ?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Code of Brawl";
}
function all09(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/jcZmKJbnnEw?autoplay=1";
	document.getElementById("video-title").innerHTML = "Seasonal Event Trailer: Contingency Contract";
}
function all10(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/vAkSSyGk9LE?autoplay=1";
	document.getElementById("video-title").innerHTML = "Episode 6: Partial Necrosis";
}

//===========================================================================================================================================================================

function all11(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/ITpoRdbl2k0?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Ancient Forge";
}
function all12(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/zVaugCF2Nm0?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Stories of Afternoon";
}
function all13(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/4_OKl-UX6PM?autoplay=1";
	document.getElementById("video-title").innerHTML = "Contingency Contract #0: Operation Barrenland";
}
function all14(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/N111el4Z68g?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Children of Ursus";
}
function all15(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/Kd-T3WoAEdk?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Twilight of Wolumonde";
}

//===========================================================================================================================================================================

function all16(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/wt2siGzxp-4?autoplay=1";
	document.getElementById("video-title").innerHTML = "Contingency Contract #1: Operation Pyrite";
}
function all17(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/s_6iLn-my9I?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Darknights Memoir";
}



//animation video list

function anime04(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/KSPYeLv3QBk?autoplay=1";
	document.getElementById("video-title").innerHTML = "Episode 5: Necessary Solution";
}
function anime05(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/xyea2EpkG6M?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Grani and the Knight's Treasure";
}
function anime06(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/uYp80C-2WJo?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Operatinal Intellingent";
}
function anime07(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/oCF6rMee-iQ?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Heart of Surging Flame";
}
function anime08(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/jfBBEoJ_e4A?autoplay=1";
	document.getElementById("video-title").innerHTML = "Event: Code of Brawl";
}

//===========================================================================================================================================================================

function anime10(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/deiLxpx3s90?autoplay=1";
	document.getElementById("video-title").innerHTML = "Episode 6: Partial Necrosis";
}
function anime11(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/tVR3JCPGzeY?autoplay=1";
	document.getElementById("video-title").innerHTML = "Ancient Forge";
}
function anime12(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/p9PbjnIodAo?autoplay=1";
	document.getElementById("video-title").innerHTML = "Stories of Afternoon";
}
function anime14(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/-FhC_YP7owk?autoplay=1";
	document.getElementById("video-title").innerHTML = "Children of Ursus";
}
function anime15(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/ddajWhTUUM0?autoplay=1";
	document.getElementById("video-title").innerHTML = "Twilight of Wolumonde";
}

//===========================================================================================================================================================================

function anime17(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/nHtUnZEBQR8?autoplay=1";
	document.getElementById("video-title").innerHTML = "Darknights Memoir";
}


//rerun video list

function rerun01(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/a2le7ggYbqU?autoplay=1";
	document.getElementById("video-title").innerHTML = "Rerun Event: Grani and the Knight's Treasure";
}

function rerun02(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/8mN02rDxE70?autoplay=1";
	document.getElementById("video-title").innerHTML = "Rerun Event: Heart of Surging Flame";
}

function rerun03(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/GsoTKQYiA0w?autoplay=1";
	document.getElementById("video-title").innerHTML = "Rerun Event: Code of Brawl";
}

function rerun04(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/-L6eGVUh0UE?autoplay=1";
	document.getElementById("video-title").innerHTML = "Rerun Event: Twilight of Wolumonde";
}

function rerun05(){
	document.getElementById("primary-video").src = "https://www.youtube.com/embed/-3VssHHpbt8?autoplay=1";
	document.getElementById("video-title").innerHTML = "Rerun Event: Darknights Memoir";
}







