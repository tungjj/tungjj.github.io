let bars = document.querySelector("#bars"), 
    nav = document.querySelector('nav'),
    den = document.getElementsByClassName('den'),
    body = document.querySelector('body');




bars.onclick = function() {
    this.classList.toggle('bars-trans');
    nav.classList.toggle('nav-trans');
    den[0].classList.toggle('den-trans');
    
}
den[0].onclick = function() {
    bars.classList.remove('bars-trans');
    nav.classList.remove('nav-trans');
    den[0].classList.remove('den-trans');
    
}
 