
const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".navItem1")

const   rowBurgersMenu = document.getElementById('burgerMenuBox')
menu.addEventListener("click", ()=>{
    dropdown.classList.toggle("showMenu")
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

    },
    {
        id:10, burgerImg: "https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/beverages_category_image_3897f9734a.png",
        burgerBtn:"BEVERAGES"

    }
]
burgers.forEach((burger)=>{
    const colDiv = document.createElement('div');
    colDiv.classList.add("col-md-6","col-lg-4");

    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');
    menuCard.addEventListener('click', () => {
        window.location.href = `http://127.0.0.1:5500/menuSinglePage.html?id=${burger.id}`; // Redirects to burger-details.html with the burger's id as a query parameter
    });
    const burgerImg = document.createElement('div');
    burgerImg.classList.add('burgerImg');
    const img = document.createElement('img')
    img.src = burger.burgerImg;
    burgerImg.appendChild(img);
const hoverImg = document.createElement('img')
hoverImg.src = "https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/_next/static/media/smasher-lines.ecd1081a.svg";
hoverImg.classList.add('hoverImg')
burgerImg.appendChild(hoverImg)    
const menuCardBtn = document.createElement('div');
    menuCardBtn.classList.add('menuCardBtn');
    const menuDesc = document.createElement('p');
    menuDesc.textContent = burger.burgerBtn;
    menuCardBtn.appendChild(menuDesc);

    menuCard.appendChild(burgerImg)
    menuCard.appendChild(menuCardBtn)
    colDiv.appendChild(menuCard);
    rowBurgersMenu.appendChild(colDiv)
})