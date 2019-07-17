let bars = document.querySelector("#bars"), 
    nav = document.querySelector('nav'),
    den = document.getElementsByClassName('den'),
    body = document.getElementsByTagName('body');



bars.onclick = function() {
    this.classList.toggle('bars-trans');
    nav.classList.toggle('nav-trans');
    den[0].classList.toggle('den-trans');
    // body[0].classList.toggle('bars-trans');
  
}
den[0].onclick = function() {
    bars.classList.remove('bars-trans');
    nav.classList.remove('nav-trans');
    den[0].classList.remove('den-trans');
    
}
 