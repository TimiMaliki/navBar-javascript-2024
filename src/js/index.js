const btn = document.querySelector(".bx-menu")

const handleClick = () => {
 const menu = document.querySelector(".menu")
    menu.classList.toggle("hide")
  const navMenu =  document.getElementsByClassName('nav__menus')
  navMenu.classList.add('hide')
}

btn.addEventListener("click" , handleClick)