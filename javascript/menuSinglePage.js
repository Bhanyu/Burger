

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





const urlParams = new URLSearchParams(window.location.search)
const burgerId = urlParams.get('id');




const burgers = [
    {
        id:1, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_classic_single_167e7ca495.png",
        burgerBtn:"SIGNATURE BURGERS",burgerPrice:"$10.09"

    },
    {
        id:2, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Crispy_916d8ec541.png",
        burgerBtn:"CRISPY CHICKENS",burgerPrice:"$10.49"

    },
    {
        id:3, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Veggie_Avocado_Burger_resized_187c3986df.png",
        burgerBtn:"VIECCE",burgerPrice:"$6.49"

    },
    {
        id:4, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Grilled_Chicken_14e5aa3935.png",
        burgerBtn:"GRILLED CHICKENS",burgerPrice:"$8.59"

    },
    {
        id:5, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/turkey_Swiss_Mushroom_b9ace8e8c2.png",
        burgerBtn:"TURKEY",burgerPrice:"$7.49"

    },
    {
        id:6, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/BBQ_Wings_c05b4d03a6.png",
        burgerBtn:"WINGS",burgerPrice:"$6.49"
    },
    {
        id:7, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/fries_and_sides_c12d139c30.png",
        burgerBtn:"FRIES & SADY",burgerPrice:"$5.39"

    },
    {
        id:8, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/w_AA_YY_Sc_eeeaf3600f.png",
        burgerBtn:"KIDS MEALS",burgerPrice:"$4.39"

    },
    {
        id:9, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_shakes_b256258dba.png",
        burgerBtn:"HANDS SPUN SHAKE",burgerPrice:"$4.59"

    },
    {
        id:10, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/beverages_category_image_3897f9734a.png",
        burgerBtn:"BEVERAGES", burgerPrice:"$3.39"

    }
]
const selectedBurger = burgers.find(burger => burger.id == burgerId);

if (selectedBurger) {
    const orderContent = document.querySelector('.orderContent')
// const singleContainer = document.querySelector('.container')
const individualDiv = `
<div class="indDiv">

<img id="burgerImage" src="${selectedBurger.burgerImg}" alt="Burger Şəkili">
</div>

`
const orderSchedule = `
<div class="orderSchedule">
    <h2>${selectedBurger.burgerBtn}</h2>
    <div class="price_colories">
        <p>${selectedBurger.burgerPrice}</p>
    
    </div>
    <div class="orderScheduleBtns">
        <button>
<span class="decrease">-</span>
<span class="burgerCount">1</span>
<span class="increase">+</span>
        </button >
        <button class="addToCartBtn">ADD TO CART - ${selectedBurger.burgerPrice} </button>
    </div>
</div>
`

orderContent.innerHTML += individualDiv;
orderContent.innerHTML += orderSchedule;



}
else{
    console.log('Burger not found');
}

const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const burgerCount = document.querySelector(".burgerCount")


   increaseBtn.addEventListener("click", ()=>{
    const showBurgerCount = Number(burgerCount.innerHTML);
    burgerCount.innerHTML = showBurgerCount + 1;

 })
  
  decreaseBtn.addEventListener("click", ()=>{
    const showBurgerCount = Number(burgerCount.innerHTML);
    if (showBurgerCount > 1) {
        burgerCount.innerHTML = showBurgerCount - 1;
    }
    else{
        decreaseBtn.disabled = true;
    }

  })

   
   const addToCartBtn = document.querySelector(".addToCartBtn")
addToCartBtn.addEventListener("click", ()=>{
    const currentCount = Number(burgerCount.innerHTML);
    addToCartFunc(selectedBurger, currentCount)
})
function addToCartFunc(burger, count) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    const existingProductIndex = basket.findIndex(item => item.id === burger.id);

    if (existingProductIndex !== -1) {
        basket[existingProductIndex].miqdar += count;
    } else {
        basket.push({
            id: burger.id,
            name: burger.burgerBtn,
            price: parseFloat(burger.burgerPrice.replace('$', '')),
            img: burger.burgerImg,  // Məhsul şəkilini əlavə edirik
            quantity: count
        });
    }

    localStorage.setItem('basket', JSON.stringify(basket));

   
}
