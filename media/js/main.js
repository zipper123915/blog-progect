let i = false;
document.querySelector(".open-nav").onclick = () => {
	if (i) {
		i = false;
		document.querySelector(".mobile-nav").style.maxHeight = "0px";
	}else{
		i = true;
		document.querySelector(".mobile-nav").style.maxHeight = "500px";
	}
}