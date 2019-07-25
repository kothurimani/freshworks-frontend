
const countriesList = document.getElementById("countries");
let countries; 

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
function initialize(data){
   countries = data;
        var y=getUrlParameter('para1');
        displayCountryInfo(y);
      }

function displayCountryInfo(countryByAlpha3Code) {

  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("country name").innerHTML=countryData.name;
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("latlng").innerHTML = countryData.latlng.filter(c => c.name).map(c => `${c.name} (${c.nativeName})`).join(", ");
  document.getElementById("area").innerHTML = countryData.area;
  document.getElementById("nativeName").innerHTML = countryData.nativeName;
  document.getElementById("languages").innerHTML = countryData.languages.filter(c => c.name).map(c => `${c.name} (${c.nativeName})`).join(", ");
  document.getElementById("regionalBlocs").innerHTML = countryData.regionalBlocs.filter(c => c.name).map(c => `${c.name} (${c.acronym})`).join(", ");
}