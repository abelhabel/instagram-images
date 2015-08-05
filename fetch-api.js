function instagramSettings(){
  return {
    dataType: "jsonp"
  }
}

$.ajax("https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=d1134d6ed0824fb488780a941ebe773d", instagramSettings()).done(function(response){dealWithResponse(response)})


function dealWithResponse(response){
  var arr = response.data;
  var container = document.getElementById('img_container');
  container.style.backgroundImage = "url('')";
  for(var i = 0; i < arr.length; i += 1){
    (function(i){
      console.log(i);
      setTimeout(function(){
        console.log('now', "url('" + arr[i].images.standard_resolution.url + "'')")
        container.style.backgroundImage = "url('" + arr[i].images.standard_resolution.url + "')" || "url()";
      },2000 * i + 1000);
    })(i);
  }
}