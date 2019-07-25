
const countriesList = document.getElementById("countries");
let countries; 

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}



fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function val(){
        var value1=countriesList[countriesList.selectedIndex].value;
        var queryString = "?para1=" + value1;
        window.location.href = "n.html" + queryString;
      }

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
 
  options+="<option disabled selected value> -- select an option -- </option>";
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);

  countriesList.innerHTML = options;
  displayCountryInfo();
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
document.getElementById("country name").innerHTML=countryData.name;
}