$(document).ready( function() {
 let url = "http://api.apixu.com/v1/forecast.json?key=cc9c36b492994ba8993180021193103&q=12866&days=7";

  $.ajax(
 {
   url:url,
   success: function(result){
     let forecast = result.forecast.forecastday;
    console.log(forecast);
   }

   $.each(forecast, function(index, dayOfWeek) ){
     let $highLowH3 = $("<h3/>", { text: dayOfWeek.day.high_f + "/" + dayOfWeek.day.low_f } );
     let $weatherImage = $("<img/>", { src: "https:" + dayOfWeek.day.condition.icon } );
     let $dateH3 = $("<h3/>", { text: day.date } );
     let $article = $("<article/>", {class:"col-1"} );

     $article.append($dateH3);
     $article.append($weatherImage);
     $article.append($highLowH3);

     $(".cards").append($article);
   });



 });







});



let weather = [
   { date: "4/1/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "60º",
     low: "45º"
   },
   { date: "4/2/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "55º",
     low: "45º"
   },
   { date: "4/3/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "73º",
     low: "45º"
   },
   { date: "4/4/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "80º",
     low: "45º"
   },
   { date: "4/5/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "60º",
     low: "45º"
   },
   { date: "4/6/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "24º",
     low: "45º"
   },
   { date: "4/7/2019",
     imgUrl: "https://cdn.apixu.com/weather/64x64/night/113.png",
     high: "0º",
     low: "45º"
   }
 ];
