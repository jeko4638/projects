// Open Weather Map

var conditions;
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=80e048ac7ff2eec24c11eae812265c30';
var units = '&units=imperial';
var input;
var city;

function preload(){
  cloud = loadImage('assets/cloudy.png');
  rain = loadImage('assets/rainy.png')
  snow = loadImage('assets/snowy.png')
  sun = loadImage('assets/sunny.png')
  mist = loadImage('assets/windy.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');

}




function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  city = input.value();
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
  conditions = weather.weather[0].description;
  console.log(weather);
}

function draw() {
  background(0);


  if (weather) {
    var temp = weather.main.temp;
    if(i = temp, i <= 0){
      background(105, 210, 231)
    } else if(i = temp, i >= 0, i <= 25){
      background(167, 219, 216);
    }else if(i = temp, i > 25, i <= 50){
      background(224, 228, 204);
    }else if(i = temp, i > 50, i <= 75){
      background(243, 134, 48);
    }else if(i = temp, i > 75, i <= 100){
      background(250, 105, 0);
    }else if(i = temp, i > 100){
      background(250, 54, 27);
    }
    // ellipse(width/2, height/2, temp, temp);
    fill(0);
    noStroke();
    textSize(16);
    textAlign(CENTER);
    text("The temperature in " + city + " is " + temp + " degrees.", width/2,height-500);
  }

  // if (conditions === 'broken clouds', 'Clouds', 'Cloudy', 'clouds', 'partlycloudy'){
  //
  // }

  switch(conditions) {
    case "broken clouds": {
    image(cloud, width/2-90, height/2-320, cloud.width/4, cloud.height/4);
      break;
    }
    // case "clouds": {
    //   image(cloud, width/2-180, height/2, cloud.width/2, cloud.height/2);
    //   break;
    // }
    case "scattered clouds": {
      image(cloud, width/2-90, height/2-320, cloud.width/4, cloud.height/4);
      break;
    }
    case "few clouds": {
      image(cloud, width/2-90, height/2-320, cloud.width/4, cloud.height/4);
      break;
    }
    case "overcast clouds": {
      image(cloud, width/2-90, height/2-320, cloud.width/4, cloud.height/4);
      break;
    }
    case "clear sky": {
      image(sun, width/2-90, height/2-320, sun.width/4, sun.height/4);
      break;
    }
    case "shower rain": {
      image(rain, width/2-90, height/2-320, rain.width/4, rain.height/4);
      break;
    }
    case "rain": {
      image(rain, width/2-90, height/2-320, rain.width/4, rain.height/4);
      break;
    }
    case "moderate rain": {
      image(rain, width/2-90, height/2-320, rain.width/4, rain.height/4);
      break;
    }
    case "thunderstorm": {
      image(rain, width/2-90, height/2-320, rain.width/4, rain.height/4);
      break;
    }
    case "snow": {
      image(snow, width/2-90, height/2-320, snow.width/4, snow.height/4);
      break;
    }
    case "light snow": {
      image(snow, width/2-90, height/2-320, snow.width/4, snow.height/4);
      break;
    }
    case "light shower snow": {
      image(snow, width/2-90, height/2-320, snow.width/4, snow.height/4);
      break;
    }
    case "mist": {
      image(mist, width/2-90, height/2-320, mist.width/4, mist.height/4);
      break;
    }
    case "haze": {
      image(mist, width/2-90, height/2-320, mist.width/4, mist.height/4);
      break;
    }
    case "smoke": {
      image(mist, width/2-90, height/2-320, mist.width/4, mist.height/4);
      break;
    }
  }
}
