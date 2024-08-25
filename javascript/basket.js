

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






const startOrder = document.querySelector(".startOrder");

startOrder.addEventListener("click", ()=>{
    window.location.href = "http://127.0.0.1:5500/menu.html"
})



// Load the basket from localStorage
function loadBasket() {
    const startOrder = document.querySelector(".startOrder");
    const basketTitle = document.querySelector(".basketTitle")
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketContent = document.querySelector('.basketContent');
    const totalPriceElement = document.getElementById('totalPrice');
    // const basketTotal = document.querySelector(".basketTotal")
    // const basketItemProps = document.querySelector(".basketItemProps") 
    const basketSpace = document.querySelector(".basketSpace")
    
    let totalPrice = 0;

    basketContent.innerHTML = '';
basketSpace.style.display = "none"


    basket.forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        const basketItemHTML = `
           
                <div class="orderedItem">
                <button class="removeItem" data-id="${item.id}">X</button>
                    <img src="${item.img}" alt="${item.name}" />
                    <div class="basketInnerDesc">
                    <h3 class="orderedItemTitle">${item.name}</h3>
                    <button class="quantityButtons">
                        <span class="decrease" data-id="${item.id}">-</span>
                        <span class="burgerCount">${item.quantity}</span>
                        <span class="increase" data-id="${item.id}">+</span>
                    </button>
                    </div>
                  
                    <p class="orderedItemPrice">$${itemTotalPrice.toFixed(2)}</p>
                 
                </div>
          
        `;

        basketContent.innerHTML += basketItemHTML;
        startOrder.style.display = "none";
        basketTitle.innerHTML = "CARD";
        basketSpace.style.display = "block"
    });

if (basket.length === 0) {
    
    basketTitle.innerHTML = "YOUR CART IS EMPTY";
    startOrder.style.display = "block"
    
}
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    // Add event listeners for increase and decrease buttons
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    document.querySelectorAll(".removeItem").forEach(button =>{
        button.addEventListener('click', removeItem)
    })
}

// Increase quantity
function increaseQuantity(event) {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const item = basket.find(item => item.id === itemId);

    if (item) {
        item.quantity++;
        localStorage.setItem('basket', JSON.stringify(basket));
        loadBasket();
    }
}

// Decrease quantity
function decreaseQuantity(event) {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const itemId = parseInt(event.target.getAttribute('data-id'));
    const item = basket.find(item => item.id === itemId);

    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('basket', JSON.stringify(basket));
        loadBasket();
    }
}

function removeItem(event) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let itemId = parseInt(event.target.getAttribute('data-id'));
    
   
    basket = basket.filter(item => item.id !== itemId);
    

    localStorage.setItem('basket', JSON.stringify(basket));

 
    loadBasket();

  
  
}


// Clear the basket
document.getElementById('clearBasket').addEventListener('click', () => {
    localStorage.removeItem('basket');
   
    loadBasket();
   
});

document.querySelector(".moreItems").addEventListener("click", ()=>{
    window.location.href = "http://127.0.0.1:5500/menu.html"
})


loadBasket();
