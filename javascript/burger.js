

const mobMenuBar = document.querySelector(".showBtn")
const mobMenuContent= document.querySelector(".menuMobContent");
const tophead = document.querySelector(".tophead")
const closeBar = document.querySelector(".hiddenClose")
const rowBurgersMenu = document.getElementById("burgerMenuBox")
const rowOrderWays = document.getElementById('rowOrderWays')
const topHeadClose = document.querySelector(".close")
const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".navItem1")
const footFaqCols = document.querySelectorAll(".footFaqItem")
mobMenuBar.addEventListener("click", function(){
    mobMenuBar.style.display = "none"
    closeBar.style.display = "block"
   tophead.classList.add("hideUp")
    mobMenuContent.style.display = "block"
})

closeBar.addEventListener(("click"), function () {
    mobMenuBar.style.display = "block"
    closeBar.style.display = "none"
    tophead.classList.remove("hideUp")
    mobMenuContent.style.display = "none"
})

const burgers = [
    {
        id:1, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_classic_single_167e7ca495.png",
        burgerBtn:"SIGNATURE BURGERS"

    },
    {
        id:2, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Crispy_916d8ec541.png",
        burgerBtn:"CRISPY CHICKENS"

    },
    {
        id:3, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Veggie_Avocado_Burger_resized_187c3986df.png",
        burgerBtn:"VIECCE"

    },
    {
        id:4, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Grilled_Chicken_14e5aa3935.png",
        burgerBtn:"GRILLED CHICKENS"

    },
    {
        id:5, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/turkey_Swiss_Mushroom_b9ace8e8c2.png",
        burgerBtn:"TURKEY"

    },
    {
        id:6, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/BBQ_Wings_c05b4d03a6.png",
        burgerBtn:"WINGS"
    },
    {
        id:7, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/fries_and_sides_c12d139c30.png",
        burgerBtn:"FRIES & SADY"

    },
    {
        id:8, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/w_AA_YY_Sc_eeeaf3600f.png",
        burgerBtn:"KIDS MEALS"

    },
    {
        id:9, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_shakes_b256258dba.png",
        burgerBtn:"HANDS SPUN SHAKE"

    }
]
burgers.forEach((burger)=>{
    const colDiv = document.createElement('div');
    colDiv.classList.add("col-md-6","col-lg-4");

    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    const burgerImg = document.createElement('div');
    burgerImg.classList.add('burgerImg');
    const img = document.createElement('img')
    img.src = burger.burgerImg;
    burgerImg.appendChild(img);

    const menuCardBtn = document.createElement('div');
    menuCardBtn.classList.add('menuCardBtn');
    const btn = document.createElement('button');
    btn.textContent = burger.burgerBtn;
    menuCardBtn.appendChild(btn);
btn.addEventListener("click", ()=>{
   window.location.href = `homeSinglePage.html?id=${burger.id}`
})
    menuCard.appendChild(burgerImg)
    menuCard.appendChild(menuCardBtn)
    colDiv.appendChild(menuCard);
    rowBurgersMenu.appendChild(colDiv)
})

const orderWays = [ 
    {
        id:1, wayImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=360,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Gift_Cards_option_3_d252a279fd.png",
       wayHead:"GIFT CARD",
       wayDesc:"Purchase virtual gift cards! Available in $5-$500, choose the gift that fits the occasion"
       
        , wayBtn:"BUY GIFT CARDS"
    },
    {
        id:2, wayImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=360,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/intro_new_4141d94cf5.jpg",
       wayHead:"JOIN SMASHREWARDS",
       wayDesc:"Order Smashburger fast, save your favorite orders, earn points, and get free food. It’s really that simple"
       
        , wayBtn:"BUY GIFT CARDS"
    },
    {
        id:3, wayImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=360,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Catering_homepage_63e8289324.jpeg",
       wayHead:"CATERING",
       wayDesc:"Make your next event a Smash!"
       
        , wayBtn:"BUY GIFT CARDS"
    },
    {
        id:4, wayImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=360,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Home_Page_News_a9da9f1f9f.png",
       wayHead:"WE MADE HEADLINES!",
       wayDesc:"Purchase virtual gift cards! Available in $5-$500, choose the gift that fits the occasion"
       
        , wayBtn:"BUY GIFT CARDS"
    }
]
orderWays.forEach((way)=>{
    const wayColDiv = document.createElement('div');
    wayColDiv.classList.add("col-md-6","col-lg-3");
    const wayCard = document.createElement('div');
    wayCard.classList.add('wayCard');

    const wayCardImg = document.createElement('div');
    wayCardImg.classList.add('wayCardImg')
    const Wayimg = document.createElement('img');;
    Wayimg.src = way.wayImg;
    wayCardImg.appendChild(Wayimg);



    const wayCardDesc =document.createElement('div');
    wayCardDesc.classList.add('wayCardDesc');
    const wayCardHead = document.createElement('h2');
    wayCardHead.textContent = way.wayHead;
    const wayCardText = document.createElement('p');
    const wayCardBtn = document.createElement('button');
    wayCardBtn.classList.add('wayCardBtn')
    wayCardBtn.textContent  =way.wayBtn
    wayCardText.textContent = way.wayDesc;
    wayCardDesc.appendChild(wayCardHead);
    wayCardDesc.appendChild(wayCardText)
wayCardDesc.appendChild(wayCardBtn)
wayCard.appendChild(wayCardImg);
wayCard.appendChild(wayCardDesc)
wayColDiv.appendChild(wayCard)
rowOrderWays.appendChild(wayColDiv)
})
topHeadClose.addEventListener("click", ()=>{
    tophead.style.display = "none"
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