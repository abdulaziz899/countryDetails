fetch('https://restcountries.eu/rest/v2/all')
.then(response=>response.json())
.then(data=>displayCountry(data))
function displayCountry(countries) {
    const countryContainer=document.getElementById('countryName')
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        //console.log(country.name);
         const countryDiv=document.createElement('div');
         countryDiv.className='country';
        const countryInfo= `
        <h3 class="countryNames">${country.name}</h3>

        <p class="countryCapital">${country.capital}</p>

        <button onclick="countryDetails('${country.name}')" > show details</button>`
        countryDiv.innerHTML=countryInfo;
        countryContainer.appendChild(countryDiv);
        //console.log(countryContainer);
        console.log(countries);
    }
}


function countryDetails(countryDetailsChange) {
    const url=`https://restcountries.eu/rest/v2/name/${countryDetailsChange}`;
    //console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data=> showCountryDetails(data));
}

function showCountryDetails(data) {
    console.log(data);
    const countriesDetails=document.getElementById('countriesDetails');
    countriesDetails.style.display='block';
     const countriesDetail=  `<h4> country name : ${data[0].name}</h4>
                            <p>    nativeName   :  ${data[0].nativeName}</p>
                            <p>    numericCode  : ${data[0].numericCode}</p>
                            <p>    population   :  ${data[0].population}</p>
                            <p>    region       :  ${data[0].region}</p>
                            <p>    area  :${data[0].area}</p>
                            <p>    subregion  :${data[0].subregion}</p>
                            <p>    timezones  :${data[0].timezones[0]}</p>

                            <img src="${data[0].flag}" alt="">
                           `
    countriesDetails.innerHTML=countriesDetail;


}
   // console.log(data[0].name);
//     console.log(data[0].nativeName);
//     console.log(data[0].numericCode);
//     console.log(data[0].population);
//     console.log(data[0].region);
//     console.log(data[0].flag);
// }

