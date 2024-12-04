const myObserver = new IntersectionObserver ((entries) => {
	entries.forEach( (porta) => {
		if(porta.isIntersecting){
			porta.target.classList.add('visivel');
		} else {
			porta.target.classList.remove('visivel');
		}
	})
})

const elements = document.querySelectorAll('.invisivel');
elements.forEach((element) => myObserver.observe(element));

/*vamo ve*/

let contador = 1;

setInterval( function(){

    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if(contador > 3){
        contador = 1;
    }
}, 3000);


/* menu aborg */

const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav li a"); 

function toggleMenu() {
  menuBar.classList.toggle("change");
  nav.style.display = nav.style.display === "block" ? "none" : "block"; 
}

function closeMenu() {
  menuBar.classList.remove("change");
  nav.style.display = "none";
}

menuBar.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});
