

const mobMenuBar = document.querySelector(".showBtn")
const mobMenuContent= document.querySelector(".menuMobContent");

const closeBar = document.querySelector(".hiddenClose")
const rowBurgersMenu = document.getElementById("burgerMenuBox")


const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".navItem1")
const footFaqCols = document.querySelectorAll(".footFaqItem")
const viewmoreBtn = document.querySelector(".viewmoreBtn")
viewmoreBtn.addEventListener('click', function () {
    window.location.href = "http://127.0.0.1:5500/menu.html"
})
mobMenuBar.addEventListener("click", function(){
    mobMenuBar.style.display = "none"
    closeBar.style.display = "block"
 
    mobMenuContent.style.display = "block"
})

closeBar.addEventListener(("click"), function () {
    mobMenuBar.style.display = "block"
    closeBar.style.display = "none"
    // tophead.classList.remove("hideUp")
    mobMenuContent.style.display = "none"
})







menu.addEventListener("click", ()=>{
   dropdown.classList.toggle("showMenu")
})
footFaqCols.forEach((footFaqItem)=>{
    footFaqItem.addEventListener("click", ()=>{
        if (!footFaqItem.classList.contains("activeFootNav")) {
            removeFoodNavItem()
            footFaqItem.classList.add("activeFootNav")
            footFaqItem.firstElementChild.lastElementChild.innerHTML ='-'
            
        }

        else{
            footFaqItem.classList.remove("activeFootNav")
            footFaqItem.firstElementChild.lastElementChild.innerHTML ='+'
        }
    })
})


function removeFoodNavItem(){
    footFaqCols.forEach(footFaqItem =>{
        footFaqItem.classList.remove("activeFootNav")
        footFaqItem.firstElementChild.lastElementChild.innerHTML ='+'
    })
}