const cateringDetailsContent = document.querySelector('.cateringDetailsContent')
const burgerServiceContent = document.querySelector(".burgerServiceContent")
const cateringDetails = [
    {
        "id": 1,detalImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/shopping_bags_icon_83b6022c1d.png", detalName:"High Quality Smashburger Favorites to Choose From"
    },
    {
        "id": 2,detalImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/hand_money_icon_fda23ca57a.png", detalName:"High Quality Smashburger Favorites to Choose From"
    },
    {
        "id": 3,detalImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/fast_time_icon_553fa387fb.png", detalName:"High Quality Smashburger Favorites to Choose From"
    },
    {
        "id": 4,detalImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/clipboard_icon_4797027a4c.png", detalName:"High Quality Smashburger Favorites to Choose From"
    },
    {
        "id": 5,detalImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=480,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/gift_icon_455e46e24c.png", detalName:"High Quality Smashburger Favorites to Choose From"
    }
]

cateringDetails.forEach((detailItem)=>{
    const detailItemHTML = `
    <div class="cateringDetailsItem">
    <img src="${detailItem.detalImg}" alt="${detailItem.detalName}">
    <h2>${detailItem.detalName}</h2>
    
    </div>
    
    `
    cateringDetailsContent.innerHTML += detailItemHTML
})

const burgerServices = [
    {
        "id":1 , serviceImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=640,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Rectangle_45_0bfa32c13f.png", serviceName:"BUILD YOUR OWN BURGER BAR",
        serviceText:"100% Certified angus beef, hand-smashed to order burgers with an assortment of fresh toppings."
    },
    {
        "id":2 , serviceImg:"https://smashburger.com/cdn-cgi/image/format=auto,width=640,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Rectangle_45_c56fe73453.png", serviceName:"JUST ADD WINGS",
        serviceText:"Wings so good, they’re changing the game. Try our spicy, savory, saucy wings at your next event in all 3 flavors!"
    }
]
burgerServices.forEach((serviceItem)=>{
    const serviceContent  = `
    <div class="serviceContentItem">
    <img src="${serviceItem.serviceImg}" alt="${serviceItem.serviceName}">
    <h3>${serviceItem.serviceName}</h3>
    <p>${serviceItem.serviceText}</p>
  </div>
    `
    burgerServiceContent.innerHTML += serviceContent
})