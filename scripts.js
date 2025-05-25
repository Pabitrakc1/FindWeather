console.log(" happy weather");


const API_KEY = "fbc148d8bd19ff4fc72872be431f4bdb";
function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} \u00B0C`
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
   
    try{

        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        console.log("Weather data:=> " , data);

      renderWeatherInfo();

    }

    catch(err) {

        // handle the error here

    }
    
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric
}


async function getCustomWeatherDetails(){
    try{
    let latitude = 11.6333;
    let longitude = 18.3333;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data);
    }
    catch(err) {
        console.log("Error found" , err);
    }

}


function switchTab(clickedTab){

    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }

        //console.log("Current Tab", currentTab);
    }

}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geolocation");

    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;


    console.log(lat);
    console.log(lonh);
}