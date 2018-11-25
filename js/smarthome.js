function toggleMenu(idx) {
	var menulinks = document.getElementsByClassName("toplink");
	for(i = 0; i < menulinks.length; i++) {
		menulinks[i].style.borderBottom = "2px solid transparent";
	}
	menulinks[idx].style.borderBottom = "2px solid #6466AA";
}

function pagetimer() {
	setTimeout(function() {lighthome();},2500);
}

function lighthome() {
	var homeimg = document.getElementById("imghome");
	var mobileimg = document.getElementById("imgmobilehand");
	if (homeimg.src.search("homelit.png") > -1) {
		homeimg.src = "images/homedark.png";
		mobileimg.src = "images/mobilehandoff.png";
		
	}
	else {
		homeimg.src = "images/homelit.png";
		mobileimg.src = "images/mobilehand.png";
	}
}