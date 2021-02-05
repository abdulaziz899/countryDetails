fetch('https://restcountries.eu/rest/v2/all/')
.then(responsive=>responsive.json())
.then(countries=> countryName(countries))

function countryName(countries) {
    const countryName=document.getElementById('countryName');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        // console.log(country);
        const countryDiv=document.createElement('div');
        countryDiv.className="perCountryName"
    countryDiv.innerHTML= ` <h2 class="countryNames">  ${country.name} </h2>
        <p class="countryCapital">   ${country.capital} </p>
        <button onclick="countriesDetailsShow ('${country.name}')">show details</button>
        `
        console.log( countryDiv);
        countryName.appendChild(countryDiv)
      
    }
}
function countriesDetailsShow (country){
    console.log(country);
    const url=`https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
    .then(responsive=>responsive.json())
    .then(countryName=>countryNameDetail(countryName))
}

function countryNameDetail(countryName){
    console.log(countryName);
    const countriesDetails=document.getElementById('countriesDetails');
    countriesDetails.style.display='block';
    countriesDetails.innerHTML=`   <h4> country name : ${countryName[0].name}</h4>
                                    <p>capital : ${countryName[0].capital}</p>
                                    <p>area : ${countryName[0].area}</p>
                                    <p>population : ${countryName[0].population}</p>
                                    <p>region : ${countryName[0].region}</p>
                                    <p>subregion : ${countryName[0].subregion}</p>
                                    <p>  timezones  :${countryName[0].timezones[0]}</p>
                                    <img src="${countryName[0].flag}">

    `
}