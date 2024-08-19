
const workingDetailsInner = document.querySelector(".workingDetailsInner")
const footFaqCols = document.querySelectorAll(".footFaqItem")

const mobMenuBar = document.querySelector(".showBtn")
const mobMenuContent= document.querySelector(".menuMobContent");
const closeBar = document.querySelector(".hiddenClose")
const rowBurgersMenu = document.getElementById("burgerMenuBox")
const rowOrderWays = document.getElementById('rowOrderWays')

const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".navItem1")

const workingDetails = [
    {
        id: 1,
        workingImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smash_rewards_ac8436b5ec.png",
        workingTitle: "Use SmashRewards online, in the app or in restaurants",
    },
    {
        id: 2,
        workingImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/10_points_per_dollar_e8082ec030.png",
        workingTitle: "Earn 10 points for every dollar you spend",
    },
    {
        id: 3,
        workingImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/free_smashfries_a204576fef.png",
        workingTitle: "Get FREE fries on your second purchase*",
    },
    {
        id: 4,
        workingImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_phone_with_tots_768a154996.png",
        workingTitle: "Convert points online/in app to earn rewards",
    },
    {
        id: 5,
        workingImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Rewards_Bonus_81a9fec54f.png",
        workingTitle: "Earn a free reward on your birthday!*",
    },
    {
        id: 6,
        workingImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/double_point_twosday_6c53038bde.png",
        workingTitle: "Earn double the points on select days*",
    },
    
]
workingDetails.forEach((workingDetail)=>{
    const workingDetailsInnerBoxText = `
    <div class="col-md-6 col-lg-4">
    <div class="workingDetailsInnerBox">
 
        <img src=${workingDetail.workingImg} alt="">
      <h3>${workingDetail.workingTitle}</h3>
    </div>
    `
    workingDetailsInner.innerHTML += workingDetailsInnerBoxText
})


mobMenuBar.addEventListener("click", function(){
    mobMenuBar.style.display = "none"
    closeBar.style.display = "block"

    mobMenuContent.style.display = "block"
})

closeBar.addEventListener(("click"), function () {
    mobMenuBar.style.display = "block"
    closeBar.style.display = "none"
 
    mobMenuContent.style.display = "none"
})


menu.addEventListener("click", ()=>{
   dropdown.classList.toggle("showMenu")
})


footFaqCols.forEach((footFaqItem)=>{
    footFaqItem.addEventListener("click",()=>{
        if (!footFaqItem.classList.contains("activeFootNav")) {
            removeFoodNavItem()
            footFaqItem.classList.add("activeFootNav")
            footFaqItem.firstElementChild.lastElementChild.innerHTML ='-'
            
        }
        else{
            removeFoodNavItem()
        }
    })
})
function removeFoodNavItem(){
footFaqCols.forEach((footFaqItem)=>{
    footFaqItem.classList.remove("activeFootNav")
    footFaqItem.firstElementChild.lastElementChild.innerHTML ='+'
})
}