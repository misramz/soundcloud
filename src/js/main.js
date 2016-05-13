//sound cloud clientId = 86b6a66bb2d863f5d64dd8a91cd8de94
import $ from 'jquery';

//grab Elem from API
var token= '86b6a66bb2d863f5d64dd8a91cd8de94';
var url = 'https://api.soundcloud.com/';

//grab emelents from HTML for jquery

var form = $('.form');

var songs = $('.songs');

form.on('submit', function(event){
  event.preventDefault();
  var search = $('#search').val();
   //console.log(search);
   $.getJSON(url +'tracks?client_id=' +token +'&q='+ search).then(function(res){
    //console.log(res);

    res.forEach(function(track){
       //console.log(track);
       var data = trackTemplate(track);
       songs.append(data);
     });
  });
});

songs.on('click', 'li', function(event) {
  event.preventDefault();
  var single = $(this).find('span').text();
  console.log(single);
  $('audio').attr('src',single + '?client_id=' + token);

});
function trackTemplate(track){
  // var single = ${track.stream_url};
  //console.log('tracktemplate',track.stream_url);


  return`
  <li> <img src="${track.artwork_url}">
        ${track.title}
        <span>${track.stream_url}</span>
  </li>
  `;

}
