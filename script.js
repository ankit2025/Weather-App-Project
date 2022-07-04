let weather={
    apiKey:"8fe037a257fe8db4b466f40f57995998",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+
             city +
             "&appid=" + this.apiKey+ 
             "&units=metric"
        ).then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name}=data; // extract name fro data
        const {icon,description}=data.weather[0];
        const {temp,humidity,feels_like}=data.main;
        const {speed}=data.wind;
        const {country}=data.sys;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+name+","+country;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp + "°C";
        document.querySelector(".feels-like").innerText="Feels-like :"+feels_like+"°C";
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed: "+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ description + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search()
    }
})

// weather.fetchWeather("Denver");