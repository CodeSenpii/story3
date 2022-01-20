window.addEventListener('DOMContentLoaded', setup);


function setup(){


  var read_btn = document.getElementById('btn-read');
  var cover = document.getElementsByClassName('book-cover');
  var nav_btn = document.getElementsByClassName('nav-btn');
  console.log(document.querySelectorAll('.pages span'));

  read_btn.addEventListener("click", function (){

    cover[0].style.visibility = 'hidden';
    nav_btn[0].style.visibility = 'visible';
    nav_btn[1].style.visibility = 'visible';
  });


}
