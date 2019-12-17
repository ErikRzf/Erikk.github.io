
  function validasi(form)  {
    var username = document.getElementById("username").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (username != "" && password1 != "" && passwrod2 != "") {
        return (true);
    } else {
        alert('Anda harus mengisi data dengan lengkap !') ;
        return (false);
    }
}
function validasireg() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (fname !="" && lname !="" && username != "" && password != "" ) {
      return (true);
  } else {
      alert('Anda harus mengisi data dengan lengkap !');
      return (false);
  }
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Sliders");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



//JS navbar============================================

'use strict'

// Helper function
function addListenerToElement (element, eventType, listener) {
  element.addEventListener(eventType, listener)
}

// Add "active" class to clicked element, remove it from siblings and toggle show in sub-menus
function toggleActiveClass () {
  let parentElement = this.parentNode
  let siblings = parentElement.parentNode.children
  let dropDown = this.nextElementSibling

  for (const value of siblings) {
    if (value.classList.contains('main-nav__menu-item--active')) {
      value.classList.remove('main-nav__menu-item--active')
    }
  }
  if (!parentElement.classList.contains('main-nav__menu-item--active')) {
    parentElement.classList.add('main-nav__menu-item--active')
  }
  if (dropDown !== null) {
    dropDown.classList.toggle('main-nav__sub-menu--show')
  }
}

// Close the open dropdow clicking everywhere
function closeDropdown (event) {
  let dropDownShow = document.getElementsByClassName(
    'main-nav__sub-menu--show'
  )[0]

  if (
    dropDownShow !== undefined &&
    dropDownShow.previousElementSibling !== event.target
  ) {
    dropDownShow.classList.remove('main-nav__sub-menu--show')
  }
}

// Toggle animated menu opening in mobile view, dynamically based on menu items quantity
function toggleNav () {
  const navBar = this.parentNode.nextElementSibling
  const menuItem = document.getElementsByClassName('main-nav__menu-item')
  const menuItemHeight = menuItem[0].offsetHeight
  const menuItemLength = menuItem.length
  const menuHeight = menuItemHeight * menuItemLength

  navBar.classList.toggle('main-nav__menu--open')

  if (navBar.classList.contains('main-nav__menu--open')) {
    navBar.animate([{ height: '0' }, { height: menuHeight + 'px' }], {
      duration: 500,
      easing: 'ease-in-out'
    })
  } else {
    navBar.animate([{ height: menuHeight + 'px' }, { height: '0' }], {
      duration: 500,
      easing: 'ease-in-out'
    })
  }
}

let menuItems = document.querySelectorAll('.main-nav__menu-item-link')
let toggleButton = document.getElementById('toggle-nav')

for (const value of menuItems) {
  addListenerToElement(value, 'click', toggleActiveClass)
}

addListenerToElement(window, 'mouseup', closeDropdown)
addListenerToElement(toggleButton, 'click', toggleNav)
