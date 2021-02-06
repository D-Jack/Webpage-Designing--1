const backDropEl = document.getElementById("backdrop");

const navScrollHandler = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").classList.add("nav-responsive");
 } else {
      document.getElementById("mainNav").classList.remove("nav-responsive");
  }
};

window.onscroll = () => {
  navScrollHandler();
};


const toggleBackdropHandler = () => {
  backDropEl.classList.toggle("visible");
};
const backdrophandler = () => {
  toggleNavbar();
  toggleBackdropHandler();
};

const toggleNavbar=()=> {
  const navEl = document.getElementById("mainNav");
  navEl.classList.toggle("responsive");
}

const navbarHandler = () => {
  toggleNavbar();
  toggleBackdropHandler();
}

backDropEl.addEventListener("click", backdrophandler);