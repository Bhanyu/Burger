const citiesBox = document.querySelector('.citiesBox');
const citiesCanadaBox = document.querySelector(".citiesCanadaBox")

function fetchCities(){
    fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-cities-demographics/records?limit=32')
    .then(res=>res.json())
    .then(data=>{
       data.results.forEach(cityItem => {
      
        const cityInner = `
        <div class="col-12 col-lg-2">
        <div class="city">
        <h3>${cityItem.city}</h3>
        </div>
    </div>
       
        `
        citiesBox.innerHTML += cityInner
       });;
    })
  
}
fetchCities()
const canadaCitites =[
    {city: 'ALBERTA'},
    {city: 'ONTARIO'},
]
function fetchCanadaCities(){
    canadaCitites.forEach(canadaCityItem => {
        const canadaCityInner = `
        <div class="col-12 col-lg-2">
        <div class="city">
        <h3>${canadaCityItem.city}</h3>
        </div>
    </div>
        `
        citiesCanadaBox.innerHTML += canadaCityInner
    })
}
fetchCanadaCities()