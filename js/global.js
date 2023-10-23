
// Scroll To Top
let scrollButton = document.querySelector(".scroll_to_top");
window.onscroll = () => {
  window.scrollY >= 300
    ? (scrollButton.style.display = "block")
    : (scrollButton.style.display = "none");
};

scrollButton.onclick = ()=>{
  window.scrollTo(0,0)
}


let serviceDropdown = document.querySelectorAll('.is_service_dropdown .dropdown-menu .dropdown-item')
serviceDropdown.forEach(element => {
  console.log(element);
  element.addEventListener('click', (e)=>{
    e.stopPropagation();
  })
});


let navbarItemsLinks = document.querySelectorAll('.main_app_header .navbar-nav .nav-item .nav-link');

navbarItemsLinks.forEach(element => {
  element.onclick = ()=>{
    navbarItemsLinks.forEach(ele => {
      ele.classList.remove('active')
    });
    element.classList.add('active')
  }

});
