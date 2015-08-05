function instagramSettings(){
  return {
    dataType: "jsonp"
  }
}

$.ajax("https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=d1134d6ed0824fb488780a941ebe773d", instagramSettings()).done(function(response){dealWithResponse(response)})


function dealWithResponse(response){
  var arr = response.data;
  console.log(response)
  var container = document.getElementById('img_container');
  var caption = document.getElementById('caption');
  var likes = document.getElementById('likes');
  var link = document.getElementById('link');
  for(var i = 0; i < arr.length; i += 1){
    (function(i){
      setTimeout(function(){
        container.style.backgroundImage = "url('" + arr[i].images.standard_resolution.url + "')" || "url()";
        caption.textContent = arr[i].caption.text;
        likes.textContent = "Likes: " + arr[i].likes.count;
        link.textContent = arr[i].link;
        link.href = arr[i].link;
      },2000 * i + 1000);
    })(i);
  }
}