const hamburgerBTN = document.getElementById("hamburgerBTN")
// console.log(hamburgerBTN)
const menuList = document.getElementById("toggle-menu")
// console.log(menuList)

hamburgerBTN.addEventListener('click', ()=>{
    menuList.classList.toggle('active')
})