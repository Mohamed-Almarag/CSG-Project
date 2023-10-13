
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