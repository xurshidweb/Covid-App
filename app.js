//globals
const covidCases = document.querySelector('.covidCases')
const flagImg = document.getElementById('flag-img')
const covidDeaths = document.querySelector('.covidDeaths')
const covidRecovered = document.querySelector('.covidRecovered')
const countryName = document.getElementById('country-name')
const searchBtn = document.getElementById('search-btn')
const searchInp = document.getElementById('search-input')





searchBtn.addEventListener('click', getFlag)

function getFlag(e) {
    e.preventDefault()


    //countries
    fetch (`https://restcountries.com/v3.1/name/${searchInp.value}`).then(function(countryData) {
            return countryData.json()
        }).then(getCountry)
        function getCountry(data) {
            showResult(data)
        }

        // coovid
        
    fetch(`https://covid19.mathdro.id/api/countries/${searchInp.value}`).then(function(covidData) {
        return covidData.json()
    }).then(getCovid)

    function getCovidInfo(virus1) {
        getCovid(virus1)
    }
}



    //countries fun

    function showResult(info){
        flagImg.src = info[0].flags.svg
        countryName.textContent = info[0].name.common
        searchInp.value = ''
        // document.body.style.backgroundImage = `url(https://source.unsplash.com/1900x1200/?covid)`

    }




    // fetch(`https://covid19.mathdro.id/api/countries/${searchInp.value}`).then(function(covidData) {
    //     return covidData.json()
    // }).then(getCovid)

    //covid fun

    function getCovid(virus) {
        // console.log(virus);
        covidCases.textContent = virus.confirmed.value
        covidDeaths.textContent = virus.deaths.value
        covidRecovered.textContent = virus.recovered.value
    }



    window.addEventListener('load',function () {
        alert(`Caronavirus haqida ma'lumot olish uchun ixtiyoriy davlatni kiriting`)
        document.body.style.backgroundImage = `url(https://source.unsplash.com/1900x1900/?covid)`
    })