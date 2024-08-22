

const startOrder = document.querySelector(".startOrder");

startOrder.addEventListener("click", ()=>{
    window.location.href = "http://127.0.0.1:5500/menu.html"
})


// const basket = JSON.parse(localStorage.getItem('basket')) || [];
// const basketContent = document.querySelector('basketContent');
// const basketTotal = document.querySelector('totalPrice');

// function displayBasket(){
//     basketContent.innerHTML = '';
//     let totalPrice = 0;

//     basket.forEach((item,index) => {
//         const basketItem = document.createElement('div');
//         basketItem.classList.add('basketItem');

//         const itemName = document.querySelector('p');
//         itemName.textContent = item.name;

//         const itemControls = document.createElement('div');
//         itemControls.classList.add('itemControls');

//         const decreaseButton = document.createElement('button')
//         decreaseButton.textContent = '-';
//         decreaseButton.addEventListener('click', () => {
//             updateQuantity(index, -1)
//         })
//         decreaseButton.classList.add('decreaseButton')

//         const itemQuantity = document.createElement('span');
//         itemQuantity.textContent = item.quantity;
//         itemQuantity.classList.add('itemQuantity')

//         const increaseButton = document.createElement('button')
//         increaseButton.textContent = '+';
//         increaseButton.addEventListener('click', () => {
//             updateQuantity(index, 1)
      
//         })
//         increaseButton.classList.add('increaseButton')
        

//         const itemPrice = document.createElement('p');
//         const itemTotalPrice = item.price * item.quantity;
//         itemPrice.textContent = `$${itemTotalPrice.toFixed(2)}`;

//         itemControls.appendChild(decreaseButton);
//         itemControls.appendChild(itemQuantity);
//         itemControls.appendChild(increaseButton);

//         basketItem.appendChild(itemName);
//         basketItem.appendChild(itemControls);
//         basketItem.appendChild(itemPrice)
//         basketContent.appendChild(basketItem);
//         totalPrice += itemTotalPrice
//     });
//     const totalPriceElement = document.createElement('p');
//     totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
// }
// function updateQuantity(index,change){
//     if (basket[index].quantity + change > 0) {
//         basket[index].quantity += change;
//     }
//     else{
//         basket.splice(index,1)
//     }
//     localStorage.setItem('basket', JSON.stringify(basket));
//     displayBasket()
// }
// document.querySelector(".clearBasket").addEventListener("click", ()=>{
//     localStorage.removeItem('basket');
//     location.reload()
// })
// displayBasket()


// Səbət məlumatlarını localStorage-dan götürürük
// Səbət məlumatlarını yükləyir
// Səbət səhifəsini göstərmək üçün funksiyalar
function renderSebet() {
    const sebetContent = document.querySelector('.sebetContent');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    sebetContent.innerHTML = ''; // Səhifəni təmizləyirik

    let sebet = JSON.parse(localStorage.getItem('sebet')) || [];

    sebet.forEach(item => {
        const orderedItemDiv = document.createElement('div');
        orderedItemDiv.classList.add('orderedItem');

        // Məhsulun məlumatlarını göstəririk
        orderedItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.ad}" />
            <h3 class="orderedItemTitle">${item.ad}</h3>
            <button>
                <span class="decrease">-</span>
                <span class="burgerCount">${item.miqdar}</span>
                <span class="increase">+</span>
            </button>
            <p class="orderedItemPrice">$${(item.qiymet * item.miqdar).toFixed(2)}</p>
        `;

        sebetContent.appendChild(orderedItemDiv);

        // Məhsulun cəmi qiymətini hesablayırıq
        totalPrice += item.qiymet * item.miqdar;

        // Artırma və azaltma funksionallığı
        const decreaseBtn = orderedItemDiv.querySelector('.decrease');
        const increaseBtn = orderedItemDiv.querySelector('.increase');
        const burgerCountElement = orderedItemDiv.querySelector('.burgerCount');

        decreaseBtn.addEventListener('click', () => changeQuantity(item.id, -1));
        increaseBtn.addEventListener('click', () => changeQuantity(item.id, 1));
    });

    // Cəmi qiyməti göstəririk
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Miqdarı dəyişdirmək funksiyası
function changeQuantity(burgerId, change) {
    let sebet = JSON.parse(localStorage.getItem('sebet')) || [];
    const burgerIndex = sebet.findIndex(item => item.id === burgerId);

    if (burgerIndex !== -1) {
        sebet[burgerIndex].miqdar += change;

        if (sebet[burgerIndex].miqdar <= 0) {
            sebet.splice(burgerIndex, 1); // Məhsulu çıxarırıq
        }

        localStorage.setItem('sebet', JSON.stringify(sebet));
        renderSebet(); // Səhifəni yeniləyirik
    }
}

// Səbəti təmizləmək funksiyası
function clearBasket() {
    localStorage.removeItem('sebet');
    renderSebet();
}

// Səhifə yükləndikdə səbəti göstəririk
document.addEventListener('DOMContentLoaded', () => {
    renderSebet();

    // Səbəti təmizləmə düyməsi
    const clearBasketBtn = document.getElementById('clearBasket');
    clearBasketBtn.addEventListener('click', clearBasket);
});
